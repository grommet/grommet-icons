function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Checkbox = function Checkbox(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Checkbox"
  }, props), React.createElement("rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }));
};