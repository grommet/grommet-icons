function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusGoodSmall = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 12 12",
    a11yTitle: "Status is okay"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "5",
    fillRule: "evenodd",
    stroke: "#000"
  }));
});
StatusGoodSmall.displayName = 'StatusGoodSmall';
export { StatusGoodSmall };