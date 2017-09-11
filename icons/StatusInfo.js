'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusInfo = function StatusInfo(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'StatusInfo' }, props),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd', strokeWidth: '2' },
      _react2.default.createElement('rect', { width: '20', height: '20', x: '2', y: '2', fill: '#000', stroke: '#000', rx: '2' }),
      _react2.default.createElement('path', { stroke: '#FFF', d: 'M12,10 L12,18 M12,6 L12,8' })
    )
  );
};

exports.default = StatusInfo;