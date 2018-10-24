'use strict';

exports.__esModule = true;
exports.TopCorner = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopCorner = exports.TopCorner = function TopCorner(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'TopCorner' }, props),
    _react2.default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '4 16 16 16 16 4', transform: 'rotate(180 10 10)' })
  );
};