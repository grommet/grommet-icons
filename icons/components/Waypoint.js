'use strict';

exports.__esModule = true;
exports.Waypoint = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Waypoint = exports.Waypoint = function Waypoint(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Waypoint' }, props),
    _react2.default.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '3 11 11 13 13 21 21 3' })
  );
};