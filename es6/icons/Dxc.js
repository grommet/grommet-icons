function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Dxc = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dxc"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "m12 14 4 7H8l4-7zm0-4L8 3h8l-4 7zM2 18H0V6h2a6 6 0 1 1 0 12zm20 0a6 6 0 1 1 0-12h2v12h-2z"
  }));
});
Dxc.displayName = 'Dxc';
export { Dxc };