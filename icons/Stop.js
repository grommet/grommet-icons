'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stop = function Stop(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Stop' }, props),
    _react2.default.createElement('rect', { width: '16', height: '16', x: '4', y: '4', fill: 'none', stroke: '#000', strokeWidth: '2' })
  );
};

exports.default = Stop;