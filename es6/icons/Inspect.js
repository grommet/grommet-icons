function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Inspect = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Inspect"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM1 16V6.5A4.5 4.5 0 0 1 5.5 2H6m17 14V6.5A4.5 4.5 0 0 0 18.5 2H18m.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM10 17s0-2 2-2 2 2 2 2"
  }));
});
Inspect.displayName = 'Inspect';
export { Inspect };