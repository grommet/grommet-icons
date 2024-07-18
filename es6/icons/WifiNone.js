function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var WifiNone = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WifiNone"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    strokeOpacity: ".2",
    d: "M7.757 13.757a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0",
    opacity: ".8"
  })));
});
WifiNone.displayName = 'WifiNone';
export { WifiNone };