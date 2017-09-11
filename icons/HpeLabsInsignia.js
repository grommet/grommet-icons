'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HpeLabsInsignia = function HpeLabsInsignia(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'HpeLabsInsignia' }, props),
    _react2.default.createElement('polyline', { fill: 'none', stroke: '#01A982', strokeWidth: '4', points: '20 46 2 46 2 2 26 2 26 30 18 30 18 10 10 10 10 38 34 38' })
  );
};

exports.default = HpeLabsInsignia;