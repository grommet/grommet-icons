'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RestroomMen = function RestroomMen(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'RestroomMen' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M7,13.5 L11,8 L10,21 M17,13.5 L13,8 L14,21 M12,5 C12.5522847,5 13,4.55228475 13,4 C13,3.44771525 12.5522847,3 12,3 C11.4477153,3 11,3.44771525 11,4 C11,4.55228475 11.4477153,5 12,5 Z M11,8 L13,8 L13,13.5 L11,13.5 L11,8 Z' })
      )
    )
  );
};

exports.default = RestroomMen;