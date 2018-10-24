'use strict';

exports.__esModule = true;
exports.Bluetooth = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bluetooth = exports.Bluetooth = function Bluetooth(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Bluetooth' }, props),
    _react2.default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '7 7 17 16 12 20 12 4 17 8 7 16' })
  );
};