'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _icons = require('./icons');

var Icons = _interopRequireWildcard(_icons);

var _contexts = require('./contexts');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customTheme = {
  color: '#2196f3',
  colors: {
    attention: '#ff3333'
  }
};

(0, _react3.storiesOf)('Icon', module).add('Default', function () {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return _react2.default.createElement(Icon, { size: (0, _addonKnobs.text)('Size', 'xlarge') });
}).add('Color', function () {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return _react2.default.createElement(
    _contexts.ThemeContext.Extend,
    { value: customTheme },
    _react2.default.createElement(Icon, { size: (0, _addonKnobs.text)('Size', 'xlarge'), color: (0, _addonKnobs.text)('Color', 'attention') })
  );
}).add('Custom Theme', function () {
  var Icon = Icons[(0, _addonKnobs.text)('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return _react2.default.createElement(
    _contexts.ThemeContext.Extend,
    { value: customTheme },
    _react2.default.createElement(Icon, { size: (0, _addonKnobs.text)('Size', 'xlarge') })
  );
});