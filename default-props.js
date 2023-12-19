"use strict";

exports.__esModule = true;
exports.extendDefaultTheme = exports.defaultProps = void 0;
var _utils = require("./utils");
var _themes = require("./themes");
var defaultProps = exports.defaultProps = {
  theme: _themes.base
};
var extendDefaultTheme = exports.extendDefaultTheme = function extendDefaultTheme(theme) {
  defaultProps.theme = (0, _utils.deepMerge)(_themes.base, theme);
};