'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CaretPrevious = function CaretPrevious(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'CaretPrevious' }, props),
    _react2.default.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '6 2 18 12 6 22', transform: 'matrix(-1 0 0 1 24 0)' })
  );
};

exports.default = CaretPrevious;