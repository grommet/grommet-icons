function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Vend = function Vend(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Vend"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3,2.00246167 C3,1.44881738 3.44494629,1 3.99339768,1 L20.0066023,1 C20.5552407,1 21,1.43945834 21,2.00246167 L21,23 L3,23 L3,2.00246167 Z M15,1 L15,23 M3,16 L15,16 M8,17 L10,17 M7,16 L7,12 M7,9 L7,5 M11,16 L11,12 M11,9 L11,5 M17,12 L18,12 M17,9 L19,8.99999994 M17,20 L19,19.9999999 M3,9 L15,9"
  }));
};