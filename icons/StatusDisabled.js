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
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { strokeWidth: '2' },
        _react2.default.createElement('rect', { stroke: '#000000', fill: '#000000', x: '2', y: '2', width: '20', height: '20', rx: '2' }),
        _react2.default.createElement('path', { d: 'M18,12 L6,12', stroke: '#FFFFFF', transform: 'translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ' })
      )
    )
  );
};

exports.default = StatusDisabled;