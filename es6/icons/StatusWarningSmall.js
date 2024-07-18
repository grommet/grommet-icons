function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusWarningSmall = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 12 12",
    a11yTitle: "Status is warning"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeLinejoin: "round",
    d: "m6 1 5 9H1z"
  }));
});
StatusWarningSmall.displayName = 'StatusWarningSmall';
export { StatusWarningSmall };