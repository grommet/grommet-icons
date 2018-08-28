'use strict';

exports.__esModule = true;
exports.Cut = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cut = exports.Cut = function Cut(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Cut' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M23,4 L8,16 L23,4 Z M23,20 L8,8 L23,20 Z M5,9 C6.65685425,9 8,7.65685425 8,6 C8,4.34314575 6.65685425,3 5,3 C3.34314575,3 2,4.34314575 2,6 C2,7.65685425 3.34314575,9 5,9 Z M5,21 C6.65685425,21 8,19.6568542 8,18 C8,16.3431458 6.65685425,15 5,15 C3.34314575,15 2,16.3431458 2,18 C2,19.6568542 3.34314575,21 5,21 Z' })
  );
};