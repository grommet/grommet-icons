'use strict';

exports.__esModule = true;
exports.Domain = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Domain = exports.Domain = function Domain(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Domain' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M13,3 L13,7 L13,3 Z M9,3 L9,7 L9,3 Z M5,3 L5,7 L5,3 Z M1,7 L23,7 L1,7 Z M1,21 L23,21 L23,3 L1,3 L1,21 Z' })
  );
};