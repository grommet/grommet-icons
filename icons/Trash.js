'use strict';

exports.__esModule = true;
exports.Trash = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trash = exports.Trash = function Trash(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Trash' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M4,5 L20,5 L20,23 L4,23 L4,5 Z M1,5 L23,5 M9,1 L15,1 L15,5 L9,5 L9,1 Z M9,1 L15,1 L15,5 L9,5 L9,1 Z M15,9 L15,19 M9,9 L9,19' })
  );
};