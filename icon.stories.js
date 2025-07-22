"use strict";

exports.__esModule = true;
exports["default"] = exports.Plain = exports.Default = exports.CustomTheme = exports.Color = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonKnobs = require("@storybook/addon-knobs");
var _styledComponents = require("styled-components");
var Icons = _interopRequireWildcard(require("./icons"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var customTheme = {
  global: {
    colors: {
      icon: '#2196f3',
      attention: '#ff3333'
    }
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '300px'
    }
  }
};
var _default = exports["default"] = {
  title: 'Icon'
};
var Default = exports.Default = function Default() {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement(Icon, null);
};
var Color = exports.Color = function Color() {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  var theme = JSON.parse(JSON.stringify(customTheme));
  theme.icon.disableScaleDown = (0, _addonKnobs["boolean"])('disableScaleDown', false);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    size: (0, _addonKnobs.text)('Size', 'xlarge'),
    color: (0, _addonKnobs.text)('Color', 'attention')
  }));
};
var Plain = exports.Plain = function Plain() {
  return /*#__PURE__*/_react["default"].createElement(Icons.Pocket, {
    color: "plain"
  });
};
var CustomTheme = exports.CustomTheme = function CustomTheme() {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  var theme = JSON.parse(JSON.stringify(customTheme));
  theme.icon.disableScaleDown = (0, _addonKnobs["boolean"])('disableScaleDown', false);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    size: (0, _addonKnobs.text)('Size', 'xlarge')
  }));
};