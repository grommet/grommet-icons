'use strict';

exports.__esModule = true;
exports.TreeOption = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeOption = exports.TreeOption = function TreeOption(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'TreeOption' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M7,13 L11.375,6 L9,6 L12,2 L15,6 L12.625,6 L17,13 L15,13 L19,19.6666667 L5,19.6666667 L9,13 L7,13 Z M12,24 L12,20' })
  );
};