'use strict';

exports.__esModule = true;
exports.Microfocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Microfocus = exports.Microfocus = function Microfocus(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Microfocus' }, props),
    _react2.default.createElement('path', { fill: '#0078EF', fillRule: 'evenodd', d: 'M1,5 L5,5 L5,19 L19,19 L19,23 L1,23 L1,5 Z M5,1 L23,1 L23,19 L19,19 L19,5 L5,5 L5,1 Z' })
  );
};