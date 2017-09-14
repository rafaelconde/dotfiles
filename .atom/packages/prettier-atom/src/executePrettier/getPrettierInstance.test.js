jest.mock('atom-linter');

const prettier = require('prettier');
const path = require('path');
const atomLinter = require('atom-linter');
const createMockTextEditor = require('../../tests/mocks/textEditor');
const getPrettierInstance = require('./getPrettierInstance');

test("returns user's project's local prettier instance if it exists", () => {
  const filePath = path.join(__dirname, '..', '..', 'tests', 'fixtures', 'sourceFile.js');
  const editor = createMockTextEditor({ buffer: { file: { path: filePath } } });
  const prettierLib = path.join(__dirname, '..', '..', 'tests', 'fixtures', 'prettier.js');
  atomLinter.findCached.mockImplementation(() => prettierLib);

  const actual = getPrettierInstance(editor);

  expect(actual).toEqual(require(prettierLib)); // eslint-disable-line
  expect(atomLinter.findCached).toHaveBeenCalledWith(
    path.join(__dirname, '..', '..', 'tests', 'fixtures'),
    path.join('node_modules', 'prettier', 'index.js'),
  );
});

test("returns bundled prettier if user's project has no local prettier package", () => {
  atomLinter.findCached.mockImplementation(() => undefined);
  const filePath = path.join(__dirname, 'sourceFile.js');
  const editor = createMockTextEditor({ buffer: { file: { path: filePath } } });

  const actual = getPrettierInstance(editor);

  expect(actual).toEqual(prettier);
});

test('returns bundled prettier if filePath is null', () => {
  const editor = createMockTextEditor({ buffer: { file: { path: null } } });

  const actual = getPrettierInstance(editor);

  expect(actual).toEqual(prettier);
});

test('returns bundled prettier if filePath has no parent directory', () => {
  const editor = createMockTextEditor({ buffer: { file: { path: 'foo.js' } } });

  const actual = getPrettierInstance(editor);

  expect(actual).toEqual(prettier);
});
