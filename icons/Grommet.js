'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grommet = function Grommet(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Grommet' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#865CD6', strokeWidth: '5', d: 'M24,42 C33.9411255,42 42,33.9411255 42,24 C42,14.0588745 33.9411255,6 24,6 C14.0588745,6 6,14.0588745 6,24 C6,33.9411255 14.0588745,42 24,42 Z' })
  );
};

exports.default = Grommet;