'use strict';

exports.__esModule = true;
exports.Restroom = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Restroom = exports.Restroom = function Restroom(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Restroom' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeWidth: '2', d: 'M6,11 L18,11 M6,3 L18,3 M12,16 C14.7614237,16 17,13.7614237 17,11 C17,11 7,11 7,11 C7,13.7614237 9.23857625,16 12,16 Z M7,3 L17,3 L17,11 L7,11 L7,3 Z M7,6 L9.5,6 M14.5,15.5 L16,21.5 L8,21.5 L9.5,15.5' })
  );
};