function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Gateway = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gateway"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    fill: "none",
    d: "M12 20v-5m0-6V4m-7 8h5m9 0h-5m-.969-4.031L12 9.344l-1.031-1.375h2.062zm-2.062 8.07L12 14.664l1.031 1.375H10.97zM6 13.031 4.625 12 6 10.969v2.062zm12-2.062L19.375 12 18 13.031V10.97zM12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"
  }));
});
Gateway.displayName = 'Gateway';
export { Gateway };