'use strict';

exports.__esModule = true;
exports.FormViewHide = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormViewHide = exports.FormViewHide = function FormViewHide(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FormViewHide' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,12 L6,12 C6.5,14.5 9.27272727,17 12,17 C14.7272727,17 17.5,14.5 18,12 L21,12 M12,17 L12,20 M7.5,15.5 L5.5,17.5 M16.5,15.5 L18.5,17.5' })
  );
};