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
      { fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round', strokeWidth: '2' },
      _react2.default.createElement('polygon', { fill: '#000', stroke: '#000', points: '12 3 22 21 2 21' }),
      _react2.default.createElement('path', { stroke: '#FFF', d: 'M12,9 L12,15 M12,16 L12,18' })
    )
  );
};

exports.default = StatusWarning;