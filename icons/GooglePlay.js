'use strict';

exports.__esModule = true;
exports.GooglePlay = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GooglePlay = exports.GooglePlay = function GooglePlay(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'GooglePlay' }, props),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('polygon', { stroke: '#444', strokeLinejoin: 'round', strokeWidth: '2', points: '3 2 3 22 21 12' }),
      _react2.default.createElement('path', { stroke: '#444', strokeWidth: '2', d: 'M3,2 L14,16' }),
      _react2.default.createElement('path', { stroke: '#444', strokeWidth: '2', d: 'M3,8 L14,22', transform: 'matrix(1 0 0 -1 0 30)' })
    )
  );
};