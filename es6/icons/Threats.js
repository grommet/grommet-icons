function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Threats = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Threats"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 23A7 7 0 1 0 9 9a7 7 0 0 0 0 14zM9 6V5c0-3 2-4 4-4s4 1 4 4v3c0 1 0 3 2 3s2-2 2-3c0-2 1-2 2-2m-11 7-6 6m0-6 6 6m-6-9V6h6v4"
  }));
});
Threats.displayName = 'Threats';
export { Threats };