'use strict';

exports.__esModule = true;
exports.Run = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Run = exports.Run = function Run(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Run' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M15,11 L18,13 M18,5 C18.5522847,5 19,4.55228475 19,4 C19,3.44771525 18.5522847,3 18,3 C17.4477153,3 17,3.44771525 17,4 C17,4.55228475 17.4477153,5 18,5 Z M9.5,9.5 L9.52493781,6 L14.0249378,6 L15,6 L8,17 L4,17 M15,8 L12,13 L12.5,14 L17,7.5 L15,6 M11,13 L16,16.5 L16,21.5' })
  );
};