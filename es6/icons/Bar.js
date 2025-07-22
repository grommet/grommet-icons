function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Bar = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Bar"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 5h16v18H7V5zm0 0h16V3c0-1.105-.895-2-1.994-2H8.994A1.992 1.992 0 0 0 7 3v2zM1 8.009C1 6.899 1.898 6 2.998 6H7v12H2.998A2.005 2.005 0 0 1 1 15.991V8.01zM11 8v10m4-10v10m4-10v10"
  }));
});
Bar.displayName = 'Bar';
export { Bar };