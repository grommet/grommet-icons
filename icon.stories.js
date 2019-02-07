"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _styledComponents = require("styled-components");

var Icons = _interopRequireWildcard(require("./icons"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return _react.default.createElement(Icon, null);
}).add('Color', function () {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];

  if (!Icon) {
    return null;
  }

  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: customTheme
  }, _react.default.createElement(Icon, {
    size: (0, _addonKnobs.text)('Size', 'xlarge'),
    color: (0, _addonKnobs.text)('Color', 'attention')
  }));
}).add('Plain', function () {
  return _react.default.createElement(Icons.Facebook, {
    color: "plain"
  });
}).add('Custom Theme', function () {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];

  if (!Icon) {
    return null;
  }

  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: customTheme
  }, _react.default.createElement(Icon, {
    size: (0, _addonKnobs.text)('Size', 'xlarge')
  }));
});