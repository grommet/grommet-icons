'use strict';

exports.__esModule = true;
exports.StatusDisabledSmall = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusDisabledSmall = exports.StatusDisabledSmall = function StatusDisabledSmall(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 12 12', a11yTitle: 'StatusDisabledSmall' }, props),
    _react2.default.createElement('rect', { width: '10', height: '10', x: '1', y: '1', fillRule: 'evenodd', stroke: '#000', rx: '1' })
  );
};