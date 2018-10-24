'use strict';

exports.__esModule = true;
exports.TestDesktop = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestDesktop = exports.TestDesktop = function TestDesktop(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'TestDesktop' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M18.218,1 L23,1 L23,19 L1,19 L1,1 L6,1 M16.9999996,9.99999996 C13,6.99999996 11,13 7.00000002,9.99999996 M5,23 L19,23 L5,23 Z M10,1 L10,5.773 L5,12.955 L5,15 L19,15 L19,12.955 L14,5.773 L14,1 M8,1 L16,1 L8,1 Z M8,23 L16,23 L16,19 L8,19 L8,23 Z' })
  );
};