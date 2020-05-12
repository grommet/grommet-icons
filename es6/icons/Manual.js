function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Manual = function Manual(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Manual"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14,9 L14,17 L14,9 Z M10,9 L10,17 L10,9 Z M8,5 C8,7.209 9.791,9 12,9 C14.209,9 16,7.209 16,5 C16,2.791 14.209,1 12,1 C9.791,1 8,2.791 8,5 Z M4,23 L20,23 L20,20 L4,20 L4,23 Z M7,20 L17,20 L17,17 L7,17 L7,20 Z"
  }));
};