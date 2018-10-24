'use strict';

exports.__esModule = true;
exports.Bike = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bike = exports.Bike = function Bike(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Bike' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M5,19 C7.209139,19 9,17.209139 9,15 C9,12.790861 7.209139,11 5,11 C2.790861,11 1,12.790861 1,15 C1,17.209139 2.790861,19 5,19 Z M19,19 C21.209139,19 23,17.209139 23,15 C23,12.790861 21.209139,11 19,11 C16.790861,11 15,12.790861 15,15 C15,17.209139 16.790861,19 19,19 Z M5,6 L10,6 M19,15 L16,5 L13,5 M9,9 L5,15 L12,15 C12,12 14,9 17,9 L16,9 L9,9 Z M9,9 L7,6' })
  );
};