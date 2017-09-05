'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormLock = function FormLock(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'FormLock' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M9,11 C9,11 9,8 9,8 C9,6.34314575 10.3431458,5 12,5 C13.6568542,5 15,6.34314575 15,8 L15,11 M12,13 L12,16 M17,18 L17,11 L7,11 L7,18 L17,18 Z' })
      )
    )
  );
};

exports.default = FormLock;