'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sematics = function Sematics(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Sematics' }, props),
    _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M12.0026703,0 L24,6.06607718 L24,10.0551619 L12.0026703,3.98917843 L0,10.0551619 L0,6.06607718 L12.0026703,0 Z M12.0026703,6.96290918 L24,13.0289864 L24,17.0180711 L12.0026703,10.9520876 L0,17.0180711 L0,13.0289864 L12.0026703,6.96290918 Z M12.0026703,13.9277859 L24,19.9938631 L24,23.9829478 L12.0026703,17.9169643 L0,23.9829478 L0,19.9938631 L12.0026703,13.9277859 Z' })
  );
};

exports.default = Sematics;