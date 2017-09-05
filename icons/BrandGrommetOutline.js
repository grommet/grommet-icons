'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrandGrommetOutline = function BrandGrommetOutline(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'BrandGrommetOutline' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { fillRule: 'nonzero', fill: '#865CD6' },
        _react2.default.createElement('path', { d: 'M24,44.5 C35.3218374,44.5 44.5,35.3218374 44.5,24 C44.5,12.6781626 35.3218374,3.5 24,3.5 C12.6781626,3.5 3.5,12.6781626 3.5,24 C3.5,35.3218374 12.6781626,44.5 24,44.5 L24,44.5 Z M24,39.5 C15.4395864,39.5 8.5,32.5604136 8.5,24 C8.5,15.4395864 15.4395864,8.5 24,8.5 C32.5604136,8.5 39.5,15.4395864 39.5,24 C39.5,32.5604136 32.5604136,39.5 24,39.5 L24,39.5 Z' })
      )
    )
  );
};

exports.default = BrandGrommetOutline;