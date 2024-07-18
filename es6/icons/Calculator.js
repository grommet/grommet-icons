function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Calculator = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Calculator"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 23H2V1h20v22zm-6-6h2v2h-2v-2zm-5 0h2v2h-2v-2zm5-5h2v2h-2v-2zm-5 0h2v2h-2v-2zm-5 5h2v2H6v-2zm0-5h2v2H6v-2zm12-3H6V5h12v4z"
  }));
});
Calculator.displayName = 'Calculator';
export { Calculator };