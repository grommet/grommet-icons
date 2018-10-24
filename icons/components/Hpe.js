'use strict';

exports.__esModule = true;
exports.Hpe = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hpe = exports.Hpe = function Hpe(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Hpe' }, props),
    _react2.default.createElement('rect', { width: '22', height: '6', x: '1', y: '9', fill: 'none', stroke: '#01A982', strokeWidth: '3' })
  );
};