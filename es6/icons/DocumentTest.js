function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var DocumentTest = function DocumentTest(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentTest"
  }, props), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.99787498,5.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L20,23 M18,1 L18,6 L23,6 M6,9 L14,9 M8,9 L8,13.5 L3,21.5 L3,23 L17,23 L17,21.4188612 L12,13.5 L12,9 M5.5,17.5 C5.5,17.5 7.5,19.0000002 10,17.5000001 C12.5,16 14.5,17.5000001 14.5,17.5000001"
  }));
};