'use strict';

exports.__esModule = true;
exports.ChapterPrevious = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChapterPrevious = exports.ChapterPrevious = function ChapterPrevious(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'ChapterPrevious' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M23,3.5 L23,20 L14,14 L14,20 L3,12 L14,4 L14,10 L23,3.5 Z M2,2 L2,22 L2,2 Z' })
  );
};