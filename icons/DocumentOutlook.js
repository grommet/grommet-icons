'use strict';

exports.__esModule = true;
exports.DocumentOutlook = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentOutlook = exports.DocumentOutlook = function DocumentOutlook(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'DocumentOutlook' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2.99787498,8.99999999 L2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L2,23 M16,1 L16,6 L21,6 M7.75,15.75 C7.75,13.5 6.49999991,12 5,12 C3.50000009,12 2.25,13.5 2.25,15.75 C2.25,18 3.50000006,19.5000002 5.00000003,19.5000001 C6.5,19.5 7.75,18 7.75,15.75 Z M5,12 C7.42537405,12 8,14.5 8,15.75 C8,17 7.5,19.5 5,19.5 C2.5,19.5 2,17 2,15.75 C2,14.5 2.559,12 5,12 Z' })
  );
};