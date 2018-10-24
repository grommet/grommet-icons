'use strict';

exports.__esModule = true;
exports.FormTrash = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormTrash = exports.FormTrash = function FormTrash(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FormTrash' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17' })
  );
};