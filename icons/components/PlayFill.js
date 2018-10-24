'use strict';

exports.__esModule = true;
exports.PlayFill = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayFill = exports.PlayFill = function PlayFill(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'PlayFill' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,22.0000002 L21,12 L3,2 L3,22.0000002 Z M5,19 L17.5999998,11.9999999 L5,5 L5,19 Z M7,16 L14.1999999,12 L7,8 L7,16 Z M9,13 L10.8,12 L9,11 L9,13 Z' })
  );
};