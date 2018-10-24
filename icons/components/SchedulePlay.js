'use strict';

exports.__esModule = true;
exports.SchedulePlay = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SchedulePlay = exports.SchedulePlay = function SchedulePlay(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'SchedulePlay' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M14,0 L14,3 M1,7 L19,7 M6,0 L6,3 M4,11 L6,11 M8,11 L16,11 M4,15 L6,15 M8,15 L14,15 M13,19 L1,19 L1,3 L19,3 L19,13 M18,23 C20.7614237,23 23,20.7614237 23,18 C23,15.2385763 20.7614237,13 18,13 C15.2385763,13 13,15.2385763 13,18 C13,20.7614237 15.2385763,23 18,23 Z M17.5,17 L19,18 L17.5,19 L17.5,17 Z' })
  );
};