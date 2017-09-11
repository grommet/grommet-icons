'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Multimedia = function Multimedia(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Multimedia' }, props),
    _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M23.9901437,3 L18.6973306,3 L14.9519507,6.73552361 L20.2447639,6.73552361 L23.9901437,3 Z M12.0246407,6.73552361 L15.7601643,3 L10.4673511,3 L6.72197125,6.73552361 L12.0246407,6.73552361 Z M20.2546201,17.6464066 L3.73552361,17.6464066 L3.73552361,6.77494867 L7.52032854,3 L2.21765914,3 L0,5.21765914 L0,21.3917864 L24,21.3917864 L24,6.73552361 L20.2546201,6.73552361 L20.2546201,17.6464066 Z' })
  );
};

exports.default = Multimedia;