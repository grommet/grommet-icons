function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var BladesHorizontal = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "BladesHorizontal"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    fill: "none",
    d: "M3 17h4m3 0h4m3 0h4M4 21h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zm7 0h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zm7 0h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1z"
  }));
});
BladesHorizontal.displayName = 'BladesHorizontal';
export { BladesHorizontal };