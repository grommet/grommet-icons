'use strict';

exports.__esModule = true;
exports.Print = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Print = exports.Print = function Print(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Print' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M6,19 L1,19 L1,7 L23,7 L23,19 L18,19 M3,16 L21,16 M6,16 L6,23 L6,23 L18,23 L18,16 M18,7 L18,1 L6,1 L6,7 L6,7 M17,12 L19,12 L19,11 L17,11 L17,12 Z' })
  );
};