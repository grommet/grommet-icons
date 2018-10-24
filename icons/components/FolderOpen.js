'use strict';

exports.__esModule = true;
exports.FolderOpen = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FolderOpen = exports.FolderOpen = function FolderOpen(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FolderOpen' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M5,2 L11,1.99999998 L13,6 L19,6 L19,10 L5,10 L5,2 Z M2,10 L22,10 L19,22 L5,22 L2,10 Z' })
  );
};