'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusDisabled = function StatusDisabled(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'StatusDisabled' }, props),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd', strokeWidth: '2' },
      _react2.default.createElement('rect', { width: '20', height: '20', x: '2', y: '2', fill: '#000', stroke: '#000', rx: '2' }),
      _react2.default.createElement('path', { stroke: '#FFF', d: 'M18,12 L6,12', transform: 'matrix(-1 0 0 1 24 0)' })
    )
  );
};

exports.default = StatusDisabled;