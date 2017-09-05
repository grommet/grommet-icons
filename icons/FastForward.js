'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FastForward = function FastForward(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'FastForward' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        _react2.default.createElement('polygon', { points: '9 2.0586 9 8.00000005 1 2.0586 1 22.0586 9 15.9999996 9 22.0586 22 12.0586' })
      )
    )
  );
};

exports.default = FastForward;