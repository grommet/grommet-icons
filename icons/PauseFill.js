'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PauseFill = function PauseFill(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'PauseFill' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,21 L9,21 L9,3 L3,3 L3,21 Z M4,19 L8,19 L8,5 L4,5 L4,19 Z M5,17 L7,17 L7,7 L5,7 L5,17 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z M16,19 L20,19 L20,5 L16,5 L16,19 Z M17,17 L19,17 L19,7 L17,7 L17,17 Z' })
  );
};

exports.default = PauseFill;