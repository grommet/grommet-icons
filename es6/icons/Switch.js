function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Switch = function Switch(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Switch"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 1H6H6.5H7.5H12H16.8229H17.8229H18H19V2V22V23H18H6H5V22V2V1ZM7.5 11H12H16.8229H17V21H7V11H7.5ZM15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM11 19V14H13V19H11ZM12 5.00195C11.4477 5.00195 11 5.44967 11 6.00195C11 6.55424 11.4477 7.00195 12 7.00195C12.5523 7.00195 13 6.55424 13 6.00195C13 5.44967 12.5523 5.00195 12 5.00195Z",
    fill: "#000"
  }));
};