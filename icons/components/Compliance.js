'use strict';

exports.__esModule = true;
exports.Compliance = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compliance = exports.Compliance = function Compliance(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Compliance' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#231F20', strokeWidth: '2', d: 'M8,6 L16,6 L16,1 L8,1 L8,6 L8,6 L8,6 Z M16,3 L21,3 L21,23 L3,23 L3,3 L8,3 M8,14 L11,17 L17,11' })
  );
};