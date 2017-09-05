'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Down = function Down(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Down' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        _react2.default.createElement('polyline', { transform: 'translate(12.085739, 13.173763) scale(-1, 1) rotate(91.000000) translate(-12.085739, -13.173763) ', points: '7.08573898 3.17376254 17.085739 13.1737625 7.08573898 23.1737625' })
      )
    )
  );
};

exports.default = Down;