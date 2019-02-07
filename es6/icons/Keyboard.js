function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Keyboard = function Keyboard(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Keyboard"
  }, props), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,6 L22,6 C22.5522847,6 23,6.44771525 23,7 L23,18 C23,18.5522847 22.5522847,19 22,19 L2,19 C1.44771525,19 1,18.5522847 1,18 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M6,16 L18,16 M8,13 L10,13 M3,10 L5,10 M6,10 L8,10 M9,10 L11,10 M12,10 L14,10 M15,10 L17,10 M18,10 L21,10 M3,13 L7,13 M3,16 L5,16 M11,13 L13,13 M14,13 L16,13 M17,13 L21,13 M19,16 L21,16"
  }));
};