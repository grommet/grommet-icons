function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Install = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Install"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 13.5v4L12 22l-7-4.5v-4m7 8.5v-8.5m6.5-5-6.5-4L15.5 2 22 6l-3.5 2.5zm-13 0 6.5-4L8.5 2 2 6l3.5 2.5zm13 .5L12 13l3.5 2.5 6.5-4L18.5 9zm-13 0 6.5 4-3.5 2.5-6.5-4L5.5 9z"
  }));
});
Install.displayName = 'Install';
export { Install };