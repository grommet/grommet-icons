'use strict';

exports.__esModule = true;
exports.ChatOption = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatOption = exports.ChatOption = function ChatOption(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'ChatOption' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M9,7 L9,1 L23,1 L23,11 L20,11 L20,16 L15,12 M1,7 L15,7 L15,18 L9,18 L4,22 L4,18 L1,18 L1,7 Z' })
  );
};