"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@storybook/react");
var _addonKnobs = require("@storybook/addon-knobs");
var _styledComponents = require("styled-components");
var Icons = _interopRequireWildcard(require("./icons"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
(0, _react2.storiesOf)('Icon', module).add('Default', function () {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement(Icon, null);
}).add('Color', function () {
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
}).add('Plain', function () {
  return /*#__PURE__*/_react["default"].createElement(Icons.Pocket, {
    color: "plain"
  });
}).add('Custom Theme', function () {
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
});