function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Cpu = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Cpu"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    fill: "none",
    d: "M1 18h3m-3-4h3m-3-4h3M1 6h3m16 12h3m-3-4h3m-3-4h3m-3-4h3M6 1v3m4-3v3m4-3v3m4-3v3M6 20v3m4-3v3m4-3v3m4-3v3M5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm8-13h4v4h-4V7z"
  }));
});
Cpu.displayName = 'Cpu';
export { Cpu };