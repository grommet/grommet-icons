'use strict';

exports.__esModule = true;
exports.Organization = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Organization = exports.Organization = function Organization(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Organization' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M20,3 L20,23 L4,23 L4,3 L20,3 Z M8.042,9 L10.042,9 L10.042,7 L8.042,7 L8.042,9 Z M14,9 L16,9 L16,7 L14,7 L14,9 Z M8.042,15 L10.042,15 L10.042,13 L8.042,13 L8.042,15 Z M10.042,23 L14.042,23 L14.042,19 L10.042,19 L10.042,23 Z M14,15 L16,15 L16,13 L14,13 L14,15 Z M2,3 L22,3 L22,1 L2,1 L2,3 Z' })
  );
};