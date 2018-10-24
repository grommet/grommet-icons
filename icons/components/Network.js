'use strict';

exports.__esModule = true;
exports.Network = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Network = exports.Network = function Network(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Network' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', d: 'M7.5,7 L7.5,15.5142857 C7.5,19.7571429 13,18.3428571 13,22.1142857 L13,24 M11,10 L7.5,7 L4,10 M16.5,2 L16.5,10.440516 C16.5,14.5083612 13,13.1524128 13,16.7682752 L13,24 M13,5 L16.5,2 L20,5' })
  );
};