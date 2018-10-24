'use strict';

exports.__esModule = true;
exports.Tape = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tape = exports.Tape = function Tape(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Tape' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,2 L22,2 L22,22 L2,22 L2,2 Z M19,12 C19,15.8659091 15.8659091,19 12,19 C8.13409091,19 5,15.8659091 5,12 C5,8.13409091 8.13409091,5 12,5 C15.8659091,5 19,8.13409091 19,12 L19,12 Z M12,9 C10.3455,9 9,10.3455 9,12 C9,13.6545 10.3455,15 12,15 C13.6545,15 15,13.6545 15,12 C15,10.3455 13.6545,9 12,9 Z' })
  );
};