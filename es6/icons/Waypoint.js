function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Waypoint = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Waypoint"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5939 2.79579C20.9719 2.62784 21.4146 2.71028 21.7071 3.00282C21.9997 3.29536 22.0821 3.73803 21.9142 4.1161L13.9142 22.1161C13.7408 22.5061 13.3383 22.7428 12.9132 22.7059C12.4882 22.6689 12.1339 22.366 12.0304 21.952L10.1759 14.5341L2.75791 12.6796C2.34398 12.5761 2.04109 12.2218 2.00401 11.7968C1.96714 11.3716 2.20387 10.9691 2.59385 10.7958L20.5939 2.79579ZM6.05967 11.4442L11.2423 12.7401L11.3731 12.7821C11.6678 12.9006 11.8914 13.1543 11.9698 13.4677L13.2648 18.6493L19.0294 5.67958L6.05967 11.4442Z",
    fill: "#000"
  }));
});
Waypoint.displayName = 'Waypoint';
export { Waypoint };