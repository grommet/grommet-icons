'use strict';

exports.__esModule = true;
exports.Cube = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cube = exports.Cube = function Cube(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Cube' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,2 L22,7 L22,17 L12,22 L2,17 L2,7 L12,2 Z M2,7 L12,12 L22,7 M12,12 L12,21.9999998 L12,12 Z' })
  );
};