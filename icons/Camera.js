'use strict';

exports.__esModule = true;
exports.Camera = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Camera = exports.Camera = function Camera(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Camera' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,21 L1,7 L6,7 L8,3 L16,3 L18,7 L23,7 L23,21 L1,21 Z M12,18 C14.7614237,18 17,15.7614237 17,13 C17,10.2385763 14.7614237,8 12,8 C9.23857625,8 7,10.2385763 7,13 C7,15.7614237 9.23857625,18 12,18 Z' })
  );
};