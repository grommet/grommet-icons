'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Waypoint = function Waypoint(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Waypoint' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        _react2.default.createElement('polygon', { points: '3 11 11 13 13 21 21 3.00000001' })
      )
    )
  );
};

exports.default = Waypoint;