function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var StatusWarningSmall = function StatusWarningSmall(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusWarningSmall"
  }, props), React.createElement("polygon", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeLinejoin: "round",
    points: "6 1 11 10 1 10"
  }));
};