'use strict';

exports.__esModule = true;
exports.Mastercard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mastercard = exports.Mastercard = function Mastercard(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Mastercard' }, props),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('circle', { cx: '7', cy: '12', r: '7', fill: '#EA001B' }),
      _react2.default.createElement('circle', { cx: '17', cy: '12', r: '7', fill: '#FFA200', fillOpacity: '.8' })
    )
  );
};