'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusWarning = function StatusWarning(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'StatusWarning' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' },
      _react2.default.createElement(
        'g',
        { strokeWidth: '2' },
        _react2.default.createElement('polygon', { stroke: '#000000', fill: '#000000', points: '12 3 22 21 2 21' }),
        _react2.default.createElement('path', { d: 'M12,9 L12,15 M12,16 L12,18', stroke: '#FFFFFF' })
      )
    )
  );
};

exports.default = StatusWarning;