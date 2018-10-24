'use strict';

exports.__esModule = true;
exports.UnorderedList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnorderedList = exports.UnorderedList = function UnorderedList(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'UnorderedList' }, props),
    _react2.default.createElement('rect', { x: '5.94', y: '6.42', width: '18.06', height: '1.75' }),
    _react2.default.createElement('rect', { x: '5.94', y: '11.71', width: '18.06', height: '1.75' }),
    _react2.default.createElement('rect', { x: '5.94', y: '16.99', width: '18.06', height: '1.75' }),
    _react2.default.createElement('circle', { cx: '1.85', cy: '7.29', r: '1.52' }),
    _react2.default.createElement('circle', { cx: '1.85', cy: '12.58', r: '1.52' }),
    _react2.default.createElement('circle', { cx: '1.85', cy: '17.87', r: '1.52' })
  );
};