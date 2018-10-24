'use strict';

exports.__esModule = true;
exports.FormCalendar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormCalendar = exports.FormCalendar = function FormCalendar(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FormCalendar' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M6,19 L18,19 L18,8 L6,8 L6,19 Z M15,8 L15,5 L15,8 Z M9,8 L9,5 L9,8 Z M6,11.5 L18,11.5 L6,11.5 Z' })
  );
};