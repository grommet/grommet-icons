'use strict';

exports.__esModule = true;
exports.Sign = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sign = exports.Sign = function Sign(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Sign' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M8,23 C10,23 12.9996892,23 15,23 C18,23 19,21 19,18 L19,6 C19,4.00000008 18,3.99999992 17.5,4 C17,4.00000008 15.9998779,4.00000008 15.9998779,5.99999984 L15.9998779,13 C15.9998777,12 16.0001888,10.9999999 14.5003109,10.9999999 C13.000433,10.9999999 13,13 13,13 C13,12 13,11 11.5,10.9999999 C10,10.9999999 10,12 10,12.9999999 L10,4 C10,3 10.029402,2 8.5,2 C7,2 7,3 7,4 L7,18 L7,14 C7,13 6.44999986,12 5.00000005,12 C5,12 4,12 4,12 C4,12 4.00000001,14.0384045 4,18 C3.99999999,21.9615955 6,23.023861 8,23 Z' })
  );
};