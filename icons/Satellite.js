'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Satellite = function Satellite(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Satellite' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M7,17 C2.97059067,12.7941347 2.97059067,6.11763731 7,2 L22,17 C17.8823627,21.0294093 11.2058653,21.0294093 7,17 Z M7,17 C3.705,17 1,19.9491525 1,23 L13,23 C13,21.8610169 12.63,20.9661017 12,20 M15,9 L19,5 L15,9 Z M20.5,1 C19.119,1 18,2.119 18,3.5 C18,4.881 19.119,6 20.5,6 C21.881,6 23,4.881 23,3.5 C23,2.119 21.881,1 20.5,1 L20.5,1 Z' })
      )
    )
  );
};

exports.default = Satellite;