function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Rewind = function Rewind(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Rewind"
  }, props), React.createElement("polygon", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    points: "22 3.5 22 20 13 14 13 20 2 12 13 4 13 10"
  }));
};