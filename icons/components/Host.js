'use strict';

exports.__esModule = true;
exports.Host = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Host = exports.Host = function Host(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Host' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M17,4 L18,4 L18,5 L17,5 L17,4 Z M3,1 L21,1 L21,23 L3,23 L3,1 Z M3,13 L21,13 L3,13 Z M3,18 L21,18 L3,18 Z M3,8 L21,8 L3,8 Z' })
  );
};