'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusGood = function StatusGood(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StatusGood' }, props),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd', strokeWidth: '2' },
      _react2.default.createElement('circle', { cx: '12', cy: '12', r: '10', fill: '#000', stroke: '#000' }),
      _react2.default.createElement('polyline', { stroke: '#FFF', points: '7 12 11 15 16 8' })
    )
  );
};

exports.default = StatusGood;