'use strict';

exports.__esModule = true;
exports.LocationPin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocationPin = exports.LocationPin = function LocationPin(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'LocationPin' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,10 C14.209139,10 16,8.209139 16,6 C16,3.790861 14.209139,2 12,2 C9.790861,2 8,3.790861 8,6 C8,8.209139 9.790861,10 12,10 Z M12,10 L12,22' })
  );
};