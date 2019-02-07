function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Stakeholder = function Stakeholder(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Stakeholder"
  }, props), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14,9 L18.5,11 L23,9 L23,4 L18.5,2 L14,4 L14,9 Z M7,7 C4.791,7 3,8.791 3,11 C3,13.209 4.791,15 7,15 C9.209,15 11,13.209 11,11 C11,8.791 9.209,7 7,7 L7,7 Z M1,23 L1,21 C1,17 3.5,15 7,15 C10.5,15 13,17 13,21 L13,23 L1,23 Z M14,4 L18.5,6 L23,4 M18.5,6 L18.5,11 L18.5,6 Z"
  }));
};