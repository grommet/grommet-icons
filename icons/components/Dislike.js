'use strict';

exports.__esModule = true;
exports.Dislike = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dislike = exports.Dislike = function Dislike(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Dislike' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,23 L20,23 C22,23 23,22 23,20 L23,10 L16,10 L16,4 C16,2 15,1 13,1 L11,1 C11,1 10.9842682,7 10.9842677,8.32575545 C10.9842672,9.65151089 10,11 8,11 L1,11 L1,23 Z M6,23 L6,11', transform: 'rotate(180 12 12)' })
  );
};