function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var StatusGoodSmall = function StatusGoodSmall(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusGoodSmall"
  }, props), React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "5",
    fillRule: "evenodd",
    stroke: "#000"
  }));
};