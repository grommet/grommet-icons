function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Local = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Local"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 3.70996C21.6569 3.70996 23 5.05311 23 6.70996V18.71C23 20.3668 21.6569 21.71 20 21.71H4C2.34315 21.71 1 20.3668 1 18.71V6.70996C1 5.05311 2.34315 3.70996 4 3.70996H20ZM3 18.71C3 19.2622 3.44772 19.71 4 19.71H20C20.5523 19.71 21 19.2622 21 18.71V17.71H3V18.71ZM3 15.71H21V13.71H3V15.71ZM4 5.70996C3.44772 5.70996 3 6.15768 3 6.70996V11.71H11V5.70996H4ZM13 11.71H21V9.70996H13V11.71ZM13 7.70996H21V6.70996C21 6.15768 20.5523 5.70996 20 5.70996H13V7.70996Z",
    fill: "#000"
  }));
});
Local.displayName = 'Local';
export { Local };