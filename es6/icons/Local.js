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
    d: "M20 3C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20ZM3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V17H3V18ZM3 15H21V13H3V15ZM4 5C3.44772 5 3 5.44772 3 6V11H11V5H4ZM13 11H21V9H13V11ZM13 7H21V6C21 5.44772 20.5523 5 20 5H13V7Z",
    fill: "#000"
  }));
});
Local.displayName = 'Local';
export { Local };