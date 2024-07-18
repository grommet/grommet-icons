function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Paint = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Paint"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 10H2c0-5.523 0-9 10-9s10 3.477 10 9h-2m-8 0c4.418 0 8-.895 8-2s-3.582-2-8-2-8 .895-8 2 3.582 2 8 2zM4 20c0 1.657 3.582 3 8 3s8-1.343 8-3m0-12v12V8zM4 20V8v12zm4-7v4m5-4v4m-6-5c-1.5 0-3-1-3-4m14 5.5V12c0-2 2-1 2-4M8 13a1 1 0 0 0-1-1m6 1a1 1 0 0 1 2 0v.5m0 0a1.5 1.5 0 0 0 3 0M8 17a2.5 2.5 0 1 0 5 0"
  }));
});
Paint.displayName = 'Paint';
export { Paint };