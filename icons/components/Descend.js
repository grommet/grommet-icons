'use strict';

exports.__esModule = true;
exports.Descend = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Descend = exports.Descend = function Descend(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Descend' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,8 L8,2 L14,8 M11,21 L22,21 M11,17 L19,17 M11,13 L16,13 M8,2 L8,22', transform: 'matrix(1 0 0 -1 0 24)' })
  );
};