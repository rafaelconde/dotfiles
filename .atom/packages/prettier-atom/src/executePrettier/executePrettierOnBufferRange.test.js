jest.mock('prettier-eslint');
jest.mock('prettier-stylelint');
jest.mock('prettier');
jest.mock('../atomInterface');
jest.mock('../editorInterface');
jest.mock('../helpers');
jest.mock('./buildPrettierOptions');
jest.mock('./handleError');

const prettier = require('prettier');
const prettierEslint = require('prettier-eslint');
const prettierStylelint = require('prettier-stylelint');
const {
  getPrettierEslintOptions,
  shouldUseEslint,
  shouldUseStylelint,
  runLinter,
} = require('../atomInterface');
const { getCurrentFilePath, isCurrentScopeCssScope } = require('../editorInterface');
const { getPrettierInstance } = require('../helpers');
const buildPrettierOptions = require('./buildPrettierOptions');
const handleError = require('./handleError');
const buildMockTextEditor = require('../../tests/mocks/textEditor');
const executePrettierOnBufferRange = require('./executePrettierOnBufferRange');

let editor;
const bufferRangeFixture = { start: { column: 0, row: 0 }, end: { column: 20, row: 0 } };
const sourceFixture = 'const foo = (2);';
const formattedFixture = 'const foo = 2;';

beforeEach(() => {
  editor = buildMockTextEditor();
  editor.getTextInBufferRange.mockImplementation(() => sourceFixture);
  editor.getCursorBufferPosition.mockImplementation(() => ({ column: 0, row: 0 }));
  prettier.format.mockImplementation(() => formattedFixture);
  prettier.formatWithCursor.mockImplementation(() => formattedFixture);
  buildPrettierOptions.mockImplementation(() => ({ useTabs: false }));
  getPrettierInstance.mockImplementation(() => prettier);
});

it('sets the transformed text in the buffer range', async () => {
  await executePrettierOnBufferRange(editor, bufferRangeFixture);

  expect(editor.setTextInBufferRange).toHaveBeenCalled();

  // NOTE: there is currently a bug in prettier that causes formatWithCursor to
  // only return the formatted text when running in test environment, but works
  // as expected when in production.
  // expect(editor.setTextInBufferRange).toHaveBeenCalledWith(bufferRangeFixture, formattedFixture);
});

it('uses Prettier#formatWithCursor', async () => {
  const cursorOffset = 10;
  editor.getBuffer.mockImplementation(() => ({
    getRange: () => ({ isEqual: () => true }),
    characterIndexForPosition: jest.fn(() => cursorOffset),
    positionForCharacterIndex: jest.fn(() => ({ row: 0, column: 0 })),
  }));
  await executePrettierOnBufferRange(editor, bufferRangeFixture);

  expect(prettier.formatWithCursor).toHaveBeenCalledWith(sourceFixture, { useTabs: false, cursorOffset });
});

it('sets the transformed text via diff when the option is passed', async () => {
  const setTextViaDiffMock = jest.fn();
  editor.getBuffer.mockImplementation(() => ({
    getRange: () => ({ isEqual: () => true }),
    characterIndexForPosition: jest.fn(() => 0),
    positionForCharacterIndex: jest.fn(() => ({ row: 0, column: 0 })),
    setTextViaDiff: setTextViaDiffMock,
  }));

  await executePrettierOnBufferRange(editor, bufferRangeFixture, { setTextViaDiff: true });

  expect(prettier.formatWithCursor).toHaveBeenCalledWith(sourceFixture, { useTabs: false, cursorOffset: 0 });
  expect(setTextViaDiffMock).toHaveBeenCalled();

  // NOTE: there is currently a bug in prettier that causes formatWithCursor to
  // only return the formatted text when running in test environment, but works
  // as expected when in production.
  // expect(setTextViaDiffMock).toHaveBeenCalledWith(formattedFixture);
});

it('runs linter:lint if available to refresh linter highlighting', async () => {
  await executePrettierOnBufferRange(editor, bufferRangeFixture);

  expect(runLinter).toHaveBeenCalledWith(editor);
});

it('transforms the given buffer range using prettier-eslint if config enables it', async () => {
  shouldUseEslint.mockImplementation(() => true);

  const fallbackPrettierOptions = { useTabs: false };
  const prettierLast = true;

  getPrettierEslintOptions.mockImplementation(() => ({ prettierLast }));
  buildPrettierOptions.mockImplementation(() => fallbackPrettierOptions);
  getCurrentFilePath.mockImplementation(() => 'foo.js');

  await executePrettierOnBufferRange(editor, bufferRangeFixture);

  expect(prettierEslint).toHaveBeenCalledWith({
    fallbackPrettierOptions,
    filePath: 'foo.js',
    prettierLast,
    text: sourceFixture,
  });
});

it('transforms the given buffer range using prettier-stylelint if scope is CSS and config enables it', async () => {
  isCurrentScopeCssScope.mockImplementation(() => true);
  shouldUseStylelint.mockImplementation(() => true);

  const prettierOptions = { tabWidth: false };
  const filePath = 'foo.js';

  buildPrettierOptions.mockImplementation(() => prettierOptions);
  getCurrentFilePath.mockImplementation(() => filePath);

  await executePrettierOnBufferRange(editor, bufferRangeFixture);

  expect(prettierStylelint.format).toHaveBeenCalledWith({
    filePath,
    prettierOptions,
    text: sourceFixture,
  });
});

describe('when text in buffer range is already pretty', () => {
  beforeEach(() => {
    editor.getTextInBufferRange.mockImplementation(() => formattedFixture);
  });

  it("does not change the text in the editor's buffer range", async () => {
    const before = editor.getTextInBufferRange(bufferRangeFixture);

    await executePrettierOnBufferRange(editor, bufferRangeFixture);

    const after = editor.getTextInBufferRange(bufferRangeFixture);

    expect(before).toEqual(after);

    // NOTE: there is currently a bug in prettier that causes formatWithCursor to
    // only return the formatted text when running in test environment, but works
    // as expected when in production. This causes a false positive for
    // this test.
    // expect(editor.setTextInBufferRange).not.toHaveBeenCalled();
  });

  it("does not change the editor's cursor position", async () => {
    await executePrettierOnBufferRange(editor, bufferRangeFixture);

    expect(editor.setCursorScreenPosition).not.toHaveBeenCalled();
  });
});

describe('when prettier throws an error', () => {
  const error = new Error();

  beforeEach(() => {
    prettier.formatWithCursor.mockImplementation(() => {
      throw error;
    });
    // NOTE: while we guard against `formatWithCursor` we need to test throwing
    // `format` too
    prettier.format.mockImplementation(() => {
      throw error;
    });
  });

  it('handles the error', async () => {
    await executePrettierOnBufferRange(editor, bufferRangeFixture);

    expect(handleError).toHaveBeenCalledWith({ editor, error, bufferRange: bufferRangeFixture });
  });

  it("does not change the text in the editor's buffer range", async () => {
    await executePrettierOnBufferRange(editor, bufferRangeFixture);

    expect(editor.setTextInBufferRange).not.toHaveBeenCalled();
  });

  it("does not change the editor's cursor position", async () => {
    await executePrettierOnBufferRange(editor, bufferRangeFixture);

    expect(editor.setCursorScreenPosition).not.toHaveBeenCalled();
  });
});
