'use strict';

exports.__esModule = true;
exports.Duplicate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Duplicate = exports.Duplicate = function Duplicate(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Duplicate' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M4.5,17 L1,17 L1,1 L1,1 L17,1 L17,4.5 M7,7 L23,7 L23,23 L7,23 L7,7 Z M15,11 L15,19 L15,11 Z M11,15 L19,15 L11,15 Z' })
  );
};