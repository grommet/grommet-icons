'use strict';

exports.__esModule = true;
exports.Emergency = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Emergency = exports.Emergency = function Emergency(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Emergency' }, props),
    _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M10,7.17157288 L10,2 L14,2 L14,7.17157288 L17.6568542,3.51471863 L20.4852814,6.34314575 L16.8284271,10 L22,10 L22,14 L16.8284271,14 L20.4852814,17.6568542 L17.6568542,20.4852814 L14,16.8284271 L14,22 L10,22 L10,16.8284271 L6.34314575,20.4852814 L3.51471863,17.6568542 L7.17157288,14 L2,14 L2,10 L7.17157288,10 L3.51471863,6.34314575 L6.34314575,3.51471863 L10,7.17157288 Z' })
  );
};