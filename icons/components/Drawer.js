'use strict';

exports.__esModule = true;
exports.Drawer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawer = exports.Drawer = function Drawer(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Drawer' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', d: 'M1,14 L6,2 L18,2 L23,14 L21,22 L3,22 L1,14 Z M1,14 L23,14' })
  );
};