'use strict';

exports.__esModule = true;
exports.StatusWarningSmall = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusWarningSmall = exports.StatusWarningSmall = function StatusWarningSmall(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 12 12', a11yTitle: 'StatusWarningSmall' }, props),
    _react2.default.createElement('polygon', { fillRule: 'evenodd', stroke: '#000', strokeLinejoin: 'round', points: '6 1 11 10 1 10' })
  );
};