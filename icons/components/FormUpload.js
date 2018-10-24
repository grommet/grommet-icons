'use strict';

exports.__esModule = true;
exports.FormUpload = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormUpload = exports.FormUpload = function FormUpload(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FormUpload' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M6,14.1818182 L6,17.4545455 L18,17.4545455 L18,14.1818182 M12,6 L12,14 M8.18181818,9.81818182 L12,6 L15.8181818,9.81818182' })
  );
};