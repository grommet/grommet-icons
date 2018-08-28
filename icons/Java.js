'use strict';

exports.__esModule = true;
exports.Java = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Java = exports.Java = function Java(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Java' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,18 L1,9 L17,9 L17,18 C17,22 15,23 9,23 C3,23 1,22 1,18 Z M17,9 L17,12 C17,13.657 18.343,15 20,15 C21.657,15 23,13.657 23,12 C23,10.343 21.657,9 20,9 L17,9 Z M13,6 L13,2 M5,6 L5,4 M9,6 L9,0' })
  );
};