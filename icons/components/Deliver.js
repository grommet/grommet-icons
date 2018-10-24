'use strict';

exports.__esModule = true;
exports.Deliver = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Deliver = exports.Deliver = function Deliver(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Deliver' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,18 L1,18 L1,3 L14,3 L14,17 M14,18 L9,18 M6,21 C7.65685425,21 9,19.6568542 9,18 C9,16.3431458 7.65685425,15 6,15 C4.34314575,15 3,16.3431458 3,18 C3,19.6568542 4.34314575,21 6,21 Z M17,21 C18.6568542,21 20,19.6568542 20,18 C20,16.3431458 18.6568542,15 17,15 C15.3431458,15 14,16.3431458 14,18 C14,19.6568542 15.3431458,21 17,21 Z M14,8 L19,8 L23,13 L23,18 L20,18' })
  );
};