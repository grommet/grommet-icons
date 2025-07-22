function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Swim = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Swim"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11 13c.5.5 2.13-.112 3.262-.5 1.46-.5 3.238 0 2.738-.5l-2-2s-4.5 2.5-4 3zm-9 7c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M2 16c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M17.5 4l-5.278 3 3.278 3.5L12 12m7.222-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
});
Swim.displayName = 'Swim';
export { Swim };