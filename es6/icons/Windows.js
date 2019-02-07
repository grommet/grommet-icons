function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Windows = function Windows(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Windows"
  }, props), React.createElement("path", {
    fill: "#001589",
    fillRule: "evenodd",
    d: "M23.923,0 L10.959,1.893 L10.959,11.481 L23.923,11.379 L23.923,0 Z M0,3.398 L0.009,11.553 L9.782,11.498 L9.778,2.066 L0,3.398 Z M0.008,20.681 L9.781,22.025 L9.773,12.585 L0.007,12.522 L0.008,20.681 Z M10.959,22.171 L23.923,24 L23.927,12.674 L10.941,12.652 L10.959,22.171 Z"
  }));
};