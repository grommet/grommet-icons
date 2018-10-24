'use strict';

exports.__esModule = true;
exports.RotateLeft = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RotateLeft = exports.RotateLeft = function RotateLeft(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'RotateLeft' }, props),
    _react2.default.createElement('path', { d: 'M11.52,3.43A9.09,9.09,0,0,0,5.7,5.55V2.35H4.07v6.5h6.5V7.21H6.3a7.46,7.46,0,1,1-1.47,8.65l-1.46.73A9.11,9.11,0,1,0,11.52,3.43Z' })
  );
};