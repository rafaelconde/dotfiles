jest.mock('../executePrettier');
jest.mock('../editorInterface');
jest.mock('../linterInterface');
jest.mock('./shouldFormatOnSave');

const { executePrettierOnBufferRange, executePrettierOnEmbeddedScripts } = require('../executePrettier');
const { isCurrentScopeEmbeddedScope, getBufferRange } = require('../editorInterface');
const { clearLinterErrors } = require('../linterInterface');
const createMockTextEditor = require('../../tests/mocks/textEditor');
const shouldFormatOnSave = require('./shouldFormatOnSave');
const formatOnSave = require('./index');

it('returns a Promise', async () => {
  const editor = createMockTextEditor();

  const result = formatOnSave(editor);

  expect(result).toBeInstanceOf(Promise);
});

it('clears linter errors before running', async () => {
  const editor = createMockTextEditor();

  await formatOnSave(editor);

  expect(clearLinterErrors).toHaveBeenCalledWith(editor);
});

it('executes prettier on the buffer range if appropriate and scope is not embedded', async () => {
  const editor = createMockTextEditor();
  const mockRange = { start: [0, 0], end: [0, 1] };
  getBufferRange.mockImplementation(() => mockRange);
  shouldFormatOnSave.mockImplementation(() => true);
  isCurrentScopeEmbeddedScope.mockImplementation(() => false);

  await formatOnSave(editor);

  expect(executePrettierOnBufferRange).toHaveBeenCalledWith(editor, mockRange, { setTextViaDiff: true });
});

it('executes prettier on the embedded scripts if appropriate and scope is embedded', async () => {
  const editor = createMockTextEditor();
  shouldFormatOnSave.mockImplementation(() => true);
  isCurrentScopeEmbeddedScope.mockImplementation(() => true);

  await formatOnSave(editor);

  expect(executePrettierOnEmbeddedScripts).toHaveBeenCalledWith(editor);
});

it('does nothing if it should not format on save', async () => {
  const editor = createMockTextEditor();
  shouldFormatOnSave.mockImplementation(() => false);

  await formatOnSave(editor);

  expect(shouldFormatOnSave).toHaveBeenCalledWith(editor);
  expect(executePrettierOnBufferRange).not.toHaveBeenCalled();
  expect(executePrettierOnEmbeddedScripts).not.toHaveBeenCalled();
});

it('catches uncaught errors so that the user is not prevented from saving', async () => {
  const originalConsoleError = console.error; // eslint-disable-line no-console
  console.error = jest.fn(); // eslint-disable-line no-console
  const editor = createMockTextEditor();
  const fakeError = new Error('fake error');
  atom = { notifications: { addError: jest.fn() } };
  shouldFormatOnSave.mockImplementation(() => {
    throw fakeError;
  });

  await formatOnSave(editor);

  expect(atom.notifications.addError).toHaveBeenCalled();
  expect(console.error).toHaveBeenCalledWith(fakeError); // eslint-disable-line no-console

  console.error = originalConsoleError; // eslint-disable-line no-console
});
