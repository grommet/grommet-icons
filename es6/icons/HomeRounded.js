function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var HomeRounded = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "HomeRounded"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    fill: "none",
    d: "M1 22V9.76a2 2 0 0 1 .851-1.636l9.575-6.72a1 1 0 0 1 1.149 0l9.574 6.72A2 2 0 0 1 23 9.76V22a1 1 0 0 1-1 1h-5.333a1 1 0 0 1-1-1v-5.674a1 1 0 0 0-1-1H9.333a1 1 0 0 0-1 1V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"
  }));
});
HomeRounded.displayName = 'HomeRounded';
export { HomeRounded };