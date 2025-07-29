function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Plug = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Plug"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 1C15.5523 1 16 1.44772 16 2V5H19V11C19 13.7614 16.7614 16 14 16H13V22H11V16H10C7.23858 16 5 13.7614 5 11V5H8V2C8 1.44772 8.44772 1 9 1C9.55228 1 10 1.44772 10 2V5H14V2C14 1.44772 14.4477 1 15 1ZM7 11C7 12.6569 8.34315 14 10 14H14C15.6569 14 17 12.6569 17 11V7H7V11Z",
    fill: "#000"
  }));
});
Plug.displayName = 'Plug';
export { Plug };