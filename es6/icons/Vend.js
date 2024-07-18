function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Vend = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Vend"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 2.002A.998.998 0 0 1 3.993 1h16.014c.548 0 .993.44.993 1.002V23H3V2.002zM15 1v22M3 16h12m-7 1h2m-3-1v-4m0-3V5m4 11v-4m0-3V5m6 7h1m-1-3h2m-2 11h2M3 9h12"
  }));
});
Vend.displayName = 'Vend';
export { Vend };