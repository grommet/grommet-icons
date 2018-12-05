'use strict';

exports.__esModule = true;
exports.StyledIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommetStyles = require('grommet-styles');

var _defaultProps = require('./default-props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colorCss = (0, _styledComponents.css)(['', ' ', ' g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill="none"]{stroke-width:0;}}*[stroke*="#"],*[STROKE*="#"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*="#"],*[FILL*="#"]{fill:inherit;stroke:none;}'], function (props) {
  return (0, _grommetStyles.colorStyle)('fill', props.color || props.theme.global.colors.icon, props.theme);
}, function (props) {
  return (0, _grommetStyles.colorStyle)('stroke', props.color || props.theme.global.colors.icon, props.theme);
});

var IconInner = function IconInner(_ref) {
  var a11yTitle = _ref.a11yTitle,
      color = _ref.color,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['a11yTitle', 'color', 'size', 'theme']);

  return _react2.default.createElement('svg', _extends({ 'aria-label': a11yTitle }, rest));
};
IconInner.displayName = 'Icon';

var StyledIcon = (0, _styledComponents2.default)(IconInner).withConfig({
  displayName: 'StyledIcon',
  componentId: 'ofa7kd-0'
})(['display:inline-block;flex:0 0 auto;', ' ', ' ', ''], function (_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === undefined ? 'medium' : _ref2$size,
      theme = _ref2.theme;
  return '\n    width: ' + (theme.icon.size[size] || size) + ';\n    height: ' + (theme.icon.size[size] || size) + ';\n  ';
}, function (_ref3) {
  var color = _ref3.color;
  return color !== 'plain' && colorCss;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme && theme.icon.extend;
});

StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, _defaultProps.defaultProps);

exports.StyledIcon = StyledIcon;