function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CloudSoftware = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CloudSoftware"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 23h8V12H8v11zm0-7h8m-4-4v4M6 6V5c0-3 1.5-4 4-4h4c2.5 0 4 1.5 4 4v1c3 0 5 2 5 5s-2 5-5 5M14 6H6c-3 0-5 1.5-5 5s2 5 5 5"
  }));
});
CloudSoftware.displayName = 'CloudSoftware';
export { CloudSoftware };