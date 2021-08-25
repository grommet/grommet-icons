function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var PieChart = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PieChart"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 23a9 9 0 0 1 0-18v9l1.162 1.162 5.202 5.202A8.972 8.972 0 0 1 10 23zm4-13V1a9 9 0 0 1 9 9h-9zm0 3h8a8.964 8.964 0 0 1-2.107 5.787L14 13z"
  }));
});
PieChart.displayName = 'PieChart';
export { PieChart };