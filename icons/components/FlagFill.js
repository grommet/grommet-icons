'use strict';

exports.__esModule = true;
exports.FlagFill = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlagFill = exports.FlagFill = function FlagFill(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FlagFill' }, props),
    _react2.default.createElement('path', { fillRule: 'evenodd', stroke: '#000', strokeWidth: '2', d: 'M2,24 L2,2 C10,-1.5238864 13,6.64375708 22,2 L22,14 C14,18.895222 9,9.89651097 2,14' })
  );
};