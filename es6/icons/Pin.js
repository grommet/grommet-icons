function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Pin = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Pin"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m16 3-6 6s-4-1-7 2l10 10c3-3 2-7 2-7l6-6-5-5zM1 23l7-7m6-15 9 9"
  }));
});
Pin.displayName = 'Pin';
export { Pin };