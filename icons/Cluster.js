'use strict';

exports.__esModule = true;
exports.Cluster = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cluster = exports.Cluster = function Cluster(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Cluster' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M8,9 L16,9 L16,1 L8,1 L8,9 Z M1,23 L9,23 L9,15 L1,15 L1,23 Z M15,23 L23,23 L23,15 L15,15 L15,23 Z M5,15 L8,9 L5,15 Z M10,19 L14,19 L10,19 Z M16,9 L19,15 L16,9 Z' })
  );
};