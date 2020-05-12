function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Camera = function Camera(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Camera"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1,21 L1,7 L6,7 L8,3 L16,3 L18,7 L23,7 L23,21 L1,21 Z M12,18 C14.7614237,18 17,15.7614237 17,13 C17,10.2385763 14.7614237,8 12,8 C9.23857625,8 7,10.2385763 7,13 C7,15.7614237 9.23857625,18 12,18 Z"
  }));
};