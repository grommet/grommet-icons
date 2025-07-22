function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Test = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Test"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 1v7L2 20v3h20v-3L15 8V1m0 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9-7c-7-3-6 4-12 1M6 1h12"
  }));
});
Test.displayName = 'Test';
export { Test };