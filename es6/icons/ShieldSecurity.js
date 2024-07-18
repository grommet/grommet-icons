function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ShieldSecurity = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ShieldSecurity"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22s-9-4-9-11V5l9-3 9 3v6c0 7-9 11-9 11zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6V5m0 12v-3m-6-3h3m6 0h3M8 7l2 2m4 4 2 2m0-8-2 2m-4 4-2 2"
  }));
});
ShieldSecurity.displayName = 'ShieldSecurity';
export { ShieldSecurity };