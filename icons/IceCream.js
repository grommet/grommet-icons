'use strict';

exports.__esModule = true;
exports.IceCream = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IceCream = exports.IceCream = function IceCream(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'IceCream' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M17,8 C19,8 19,6.5 17.5,6.5 C17.5,3.5 15.5,1 12,1 C8.5,1 6.5,3.5 6.5,6.5 C5,6.5 5,8 7,8 M7,8 L17,8 L12,21 L7,8 Z' })
  );
};