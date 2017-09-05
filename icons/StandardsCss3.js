'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StandardsCss3 = function StandardsCss3(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'StandardsCss3' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { fill: '#000000' },
        _react2.default.createElement('polygon', { points: '3.57168784 1 2.76588022 5.02903811 19.1651543 5.02903811 18.6533575 7.63157895 2.24319419 7.63157895 1.44827586 11.6606171 17.8475499 11.6606171 16.9328494 16.2558984 10.323049 18.4446461 4.59528131 16.2558984 4.98729583 14.2631579 0.958257713 14.2631579 0 19.0980036 9.47368421 22.7241379 20.3956443 19.0980036 21.8439201 11.8239564 22.137931 10.3647913 24 1' })
      )
    )
  );
};

exports.default = StandardsCss3;