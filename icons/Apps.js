'use strict';

exports.__esModule = true;
exports.Apps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Apps = exports.Apps = function Apps(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Apps' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M19,5 L21,5 L21,3 L19,3 L19,5 Z M11,5 L13,5 L13,3 L11,3 L11,5 Z M3,5 L5,5 L5,3 L3,3 L3,5 Z M19,13 L21,13 L21,11 L19,11 L19,13 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M3,13 L5,13 L5,11 L3,11 L3,13 Z M19,21 L21,21 L21,19 L19,19 L19,21 Z M11,21 L13,21 L13,19 L11,19 L11,21 Z M3,21 L5,21 L5,19 L3,19 L3,21 Z' })
  );
};