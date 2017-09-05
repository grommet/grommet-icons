'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusCritical = function StatusCritical(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'StatusCritical' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M12.7031806,2.70318058 C12.3148247,2.31482467 11.6897542,2.31024575 11.2968194,2.70318058 L2.70318058,11.2968194 C2.31482467,11.6851753 2.31024575,12.3102458 2.70318058,12.7031806 L11.2968194,21.2968194 C11.6851753,21.6851753 12.3102458,21.6897542 12.7031806,21.2968194 L21.2968194,12.7031806 C21.6851753,12.3148247 21.6897542,11.6897542 21.2968194,11.2968194 L12.7031806,2.70318058 Z', stroke: '#000000', fill: '#000000' }),
        _react2.default.createElement('path', { d: 'M8.98264552,14.7001725 L14.7001725,8.98264552 M8.98264552,8.98264552 L14.7001725,14.7001725', stroke: '#FFFFFF' })
      )
    )
  );
};

exports.default = StatusCritical;