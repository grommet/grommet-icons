'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormUp = function FormUp(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'FormUp' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        _react2.default.createElement('polyline', { transform: 'translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) ', points: '17.9999997 9 11.9999998 15 6 9' })
      )
    )
  );
};

exports.default = FormUp;