// @flow

// constants
const LINTER_LINT_COMMAND = 'linter:lint';

// local helpers
const getConfigOption = (key: string) => atom.config.get(`prettier-atom.${key}`);

const setConfigOption = (key: string, value: any) => atom.config.set(`prettier-atom.${key}`, value);

const isLinterLintCommandDefined = (editor: TextEditor) =>
  atom.commands
    .findCommands({ target: atom.views.getView(editor) })
    .some(command => command.name === LINTER_LINT_COMMAND);

// public
const isLinterEslintAutofixEnabled = () =>
  atom.packages.isPackageActive('linter-eslint') && atom.config.get('linter-eslint.fixOnSave');

const shouldUseEslint = () => getConfigOption('useEslint');

const shouldUseEditorConfig = () => getConfigOption('useEditorConfig');

const isFormatOnSaveEnabled = () => getConfigOption('formatOnSaveOptions.enabled');

const isDisabledIfNotInPackageJson = () =>
  getConfigOption('formatOnSaveOptions.isDisabledIfNotInPackageJson');

const shouldRespectEslintignore = () => getConfigOption('formatOnSaveOptions.respectEslintignore');

const getJavascriptScopes = () => getConfigOption('formatOnSaveOptions.javascriptScopes');

const getTypescriptScopes = () => getConfigOption('formatOnSaveOptions.typescriptScopes');

const getCssScopes = () => getConfigOption('formatOnSaveOptions.cssScopes');

const getJsonScopes = () => getConfigOption('formatOnSaveOptions.jsonScopes');

const getGraphQlScopes = () => getConfigOption('formatOnSaveOptions.graphQlScopes');

const getAllScopes = () => [
  ...getJavascriptScopes(),
  ...getTypescriptScopes(),
  ...getCssScopes(),
  ...getJsonScopes(),
  ...getGraphQlScopes(),
];

const getWhitelistedGlobs = () => getConfigOption('formatOnSaveOptions.whitelistedGlobs');

const getExcludedGlobs = () => getConfigOption('formatOnSaveOptions.excludedGlobs');

const toggleFormatOnSave = () => setConfigOption('formatOnSaveOptions.enabled', !isFormatOnSaveEnabled());

const getAtomTabLength = (editor: TextEditor) =>
  atom.config.get('editor.tabLength', { scope: editor.getLastCursor().getScopeDescriptor() });

const getPrettierOptions = () => getConfigOption('prettierOptions');

const getPrettierEslintOptions = () => getConfigOption('prettierEslintOptions');

const getAtomVersion = () => atom.getVersion();

const getPrettierAtomConfig = () => atom.config.get('prettier-atom');

const addTooltip = (element: HTMLElement, options: Atom$Tooltips$Options) =>
  atom.tooltips.add(element, options);

const addInfoNotification = (message: string, options?: Atom$Notifications$Options) =>
  atom.notifications.addInfo(message, options);

const addWarningNotification = (message: string, options?: Atom$Notifications$Options) =>
  atom.notifications.addWarning(message, options);

const addErrorNotification = (message: string, options?: Atom$Notifications$Options) =>
  atom.notifications.addError(message, options);

const attemptWithErrorNotification = (func: Function, ...args: Array<any>) => {
  try {
    func(...args);
  } catch (e) {
    addErrorNotification(e.message, { dismissable: true, stack: e.stack });
  }
};

const runLinter = (editor: TextEditor) =>
  isLinterLintCommandDefined(editor) &&
  atom.commands.dispatch(atom.views.getView(editor), LINTER_LINT_COMMAND);

module.exports = {
  addErrorNotification,
  addInfoNotification,
  addTooltip,
  addWarningNotification,
  getAtomTabLength,
  getAtomVersion,
  getExcludedGlobs,
  getPrettierAtomConfig,
  getPrettierEslintOptions,
  getPrettierOptions,
  getJavascriptScopes,
  getTypescriptScopes,
  getCssScopes,
  getJsonScopes,
  getGraphQlScopes,
  getAllScopes,
  getWhitelistedGlobs,
  isDisabledIfNotInPackageJson,
  isFormatOnSaveEnabled,
  isLinterEslintAutofixEnabled,
  runLinter,
  shouldRespectEslintignore,
  shouldUseEditorConfig,
  shouldUseEslint,
  toggleFormatOnSave,
  attemptWithErrorNotification,
};
