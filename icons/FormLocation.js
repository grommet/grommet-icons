'use strict';

exports.__esModule = true;
exports.FormLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormLocation = exports.FormLocation = function FormLocation(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FormLocation' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,17 C12,17 8,14 8,11 C8,8.5 10,7 12,7 C14,7 16,8.5 16,11 C16,14 12,17 12,17 Z M12,12 C12.5523333,12 13,11.5523333 13,11 C13,10.4476667 12.5523333,10 12,10 C11.4476667,10 11,10.4476667 11,11 C11,11.5523333 11.4476667,12 12,12 L12,12 Z' })
  );
};