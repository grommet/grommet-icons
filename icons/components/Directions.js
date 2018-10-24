'use strict';

exports.__esModule = true;
exports.Directions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Directions = exports.Directions = function Directions(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Directions' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M17,11 L22,6 L17,1 M22,6 L18,6 C14.686,6 12,8.686 12,12 L12,24 M7,6 L2,11 L7,16 M2,11 L6,11 C9.314,11 12,13.686 12,17 L12,24' })
  );
};