'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Css3 = function Css3(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Css3' }, props),
    _react2.default.createElement('polygon', { fillRule: 'evenodd', points: '3.572 1 2.766 5.029 19.165 5.029 18.653 7.632 2.243 7.632 1.448 11.661 17.848 11.661 16.933 16.256 10.323 18.445 4.595 16.256 4.987 14.263 .958 14.263 0 19.098 9.474 22.724 20.396 19.098 21.844 11.824 22.138 10.365 24 1' })
  );
};

exports.default = Css3;