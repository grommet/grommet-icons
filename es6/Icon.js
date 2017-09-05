var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import deepAssign from 'deep-assign';

import StyledIcon from './StyledIcon';

var Icon = function Icon(_ref, _ref2) {
  var theme = _ref2.theme;

  var a11yTitle = _ref.a11yTitle,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['a11yTitle', 'children']);

  return React.createElement(
    StyledIcon,
    _extends({
      width: '24px',
      height: '24px',
      viewBox: '0 0 24 24',
      version: '1.1',
      role: 'img',
      'aria-label': a11yTitle,
      theme: deepAssign({
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

export default Icon;