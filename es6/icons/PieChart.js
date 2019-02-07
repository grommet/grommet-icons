function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var PieChart = function PieChart(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PieChart"
  }, props), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10,23 C5.02943725,23 1,18.9705627 1,14 C1,9.02943725 5.02943725,5 10,5 L10,14 C10,14 10.7746374,14.7746374 11.1619561,15.1619561 L16.363961,20.363961 C14.7352814,21.9926407 12.4852814,23 10,23 Z M14,10 L14,1 C18.9705627,1 23,5.02943725 23,10 L14,10 Z M14,13 L22,13 C22,15.2037225 21.2079601,17.2224541 19.8930183,18.7870568 L14,13 Z"
  }));
};