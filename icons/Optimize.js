'use strict';

exports.__esModule = true;
exports.Optimize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Optimize = exports.Optimize = function Optimize(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Optimize' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,22 L6,22 L6,18 L2,18 L2,22 Z M22,2 L12,12 M22,10 L22,2 L14,2 M22,13 L18,13 L18,22 L22,22 L22,13 Z M10,22 L14,22 L14,16 L10,16 L10,22 Z' })
  );
};