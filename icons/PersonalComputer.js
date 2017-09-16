'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PersonalComputer = function PersonalComputer(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'PersonalComputer' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,18 L21,18 L21,4 L3,4 L3,18 Z M1,21 L23,21 L23,18 L1,18 L1,21 Z M6,15 L18,15 L18,7 L6,7 L6,15 Z' })
  );
};

exports.default = PersonalComputer;