'use strict';

exports.__esModule = true;
exports.StatusWarning = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusWarning = exports.StatusWarning = function StatusWarning(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StatusWarning' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeLinejoin: 'round', strokeWidth: '2', d: 'M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18' })
  );
};