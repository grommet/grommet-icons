function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Plug = function Plug(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Plug"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 5V1H14V5H10V1H8V5H6H5V6V13C5 14.6569 6.34315 16 8 16H11V24H13V16H16C17.6569 16 19 14.6569 19 13V6V5H18H16ZM7 13V7H17V13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13Z",
    fill: "#000"
  }));
};