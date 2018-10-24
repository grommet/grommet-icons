'use strict';

exports.__esModule = true;
exports.BarChart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarChart = exports.BarChart = function BarChart(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'BarChart' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M0,22 L24,22 M22,2 L18,2 L18,18 L22,18 L22,2 Z M6,6 L2,6 L2,18 L6,18 L6,6 Z M14,18 L10,18 L10,10 L14,10 L14,18 Z' })
  );
};