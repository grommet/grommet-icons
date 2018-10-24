'use strict';

exports.__esModule = true;
exports.Compare = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compare = exports.Compare = function Compare(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Compare' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M11,7 L1,7 L1,17 L7,17 L7,8 M10.9997,5 L10.9997,9 L12.9997,7 L10.9997,5 Z M10.9999,16.99965 L12.9999,18.9994 L12.9999,14.9994 L10.9999,16.99965 Z M13,17 L23,17 L23,7 L17,7 L17,16' })
  );
};