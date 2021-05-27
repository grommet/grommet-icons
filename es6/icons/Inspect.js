function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Inspect = function Inspect(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Inspect"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM1 16V6.5A4.5 4.5 0 0 1 5.5 2H6m17 14V6.5A4.5 4.5 0 0 0 18.5 2H18m.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM10 17s0-2 2-2 2 2 2 2"
  }));
};