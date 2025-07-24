function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Channel = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Channel"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.24707 1.61867C2.58796 1.22912 3.16494 1.16716 3.57812 1.46047L3.6582 1.52394L11.376 8.27687H12.624L20.3418 1.52394C20.7574 1.16063 21.3894 1.2032 21.7529 1.61867C22.1163 2.0343 22.0737 2.66621 21.6582 3.0298L15.6611 8.27687H20C21.6568 8.27687 23 9.62005 23 11.2769V20.2769C23 21.9337 21.6569 23.2769 20 23.2769H4C2.34315 23.2769 1 21.9337 1 20.2769V11.2769C1.00004 9.62005 2.34317 8.27687 4 8.27687H8.33887L2.3418 3.0298L2.26758 2.95851C1.92198 2.58802 1.90645 2.0083 2.24707 1.61867ZM4 10.2769C3.44774 10.2769 3.00004 10.7246 3 11.2769V20.2769C3 20.8292 3.44772 21.2769 4 21.2769H20C20.5523 21.2769 21 20.8292 21 20.2769V11.2769C21 10.7246 20.5523 10.2769 20 10.2769H4Z",
    fill: "#000"
  }));
});
Channel.displayName = 'Channel';
export { Channel };