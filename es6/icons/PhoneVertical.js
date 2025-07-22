function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var PhoneVertical = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneVertical"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 23a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10zm-6-2H7V3h10v18h-4v-1.031a1 1 0 0 0-2 0V21z",
    fill: "#000"
  }));
});
PhoneVertical.displayName = 'PhoneVertical';
export { PhoneVertical };