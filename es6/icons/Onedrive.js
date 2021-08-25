function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Onedrive = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Onedrive"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#4F8AD8",
    fillRule: "evenodd",
    d: "M21.692 13.987a2.733 2.733 0 0 1 .602 5.232h-13.7a3.166 3.166 0 1 1 .281-6.321 3.963 3.963 0 0 1 7.482-2.05 3.454 3.454 0 0 1 5.336 3.138zM8.187 12.209a3.873 3.873 0 0 0-3.44 3.843c0 .81.252 1.563.681 2.186h-2.15a3.279 3.279 0 0 1-.237-6.549 3.692 3.692 0 0 1 5.668-3.86 5.103 5.103 0 0 1 9.648 1.757c-.036-.001-.072-.003-.109-.003-.568 0-1.125.115-1.64.337a4.644 4.644 0 0 0-3.778-1.929 4.67 4.67 0 0 0-4.643 4.218z"
  }));
});
Onedrive.displayName = 'Onedrive';
export { Onedrive };