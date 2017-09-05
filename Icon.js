'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _StyledIcon = require('./StyledIcon');

var _StyledIcon2 = _interopRequireDefault(_StyledIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref, _ref2) {
  var theme = _ref2.theme;

  var a11yTitle = _ref.a11yTitle,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['a11yTitle', 'children']);

  return _react2.default.createElement(
    _StyledIcon2.default,
    _extends({
      width: '24px',
      height: '24px',
      viewBox: '0 0 24 24',
      version: '1.1',
      role: 'img',
      'aria-label': a11yTitle,
      theme: (0, _deepAssign2.default)({
        icon: {
          color: '#666666',
          size: {
            large: '48px',
            xlarge: '96px'
          }
        }
      }, theme)
    }, rest),
    children
  );
};

exports.default = Icon;