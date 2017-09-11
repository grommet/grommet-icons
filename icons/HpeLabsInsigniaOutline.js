'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HpeLabsInsigniaOutline = function HpeLabsInsigniaOutline(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'HpeLabsInsigniaOutline' }, props),
    _react2.default.createElement('polygon', { fill: '#01A982', points: '20 44 4 44 4 4 24 4 24 28 20 28 20 8 8 8 8 40 34 40 34 36 12 36 12 12 16 12 16 32 26 32 28 32 28 0 0 0 0 48 20 48' })
  );
};

exports.default = HpeLabsInsigniaOutline;