function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CodeSandbox = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CodeSandbox"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#444",
    strokeWidth: "2",
    d: "m12 1.5-9 5v11l9 5 9-5v-11l-9-5zm0 21v-11m9-5-9 5m0 0-9-5m18 11V12l-4.5 2.5V20l4.5-2.5zm-18 0V12l4.5 2.5V20L3 17.5zm9-16L7.5 4 12 6.5 16.5 4 12 1.5z"
  }));
});
CodeSandbox.displayName = 'CodeSandbox';
export { CodeSandbox };