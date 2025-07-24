function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var NetworkDrive = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "NetworkDrive"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 7.27686C7.10457 7.27686 8 8.17229 8 9.27686C8 10.3814 7.10457 11.2769 6 11.2769C4.89543 11.2769 4 10.3814 4 9.27686C4 8.17229 4.89543 7.27686 6 7.27686Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 4.27686C20.7614 4.27686 23 6.51543 23 9.27686C23 12.0383 20.7614 14.2769 18 14.2769H13V16.4507C14.1647 16.8628 15 17.971 15 19.2769C15 20.9337 13.6569 22.2769 12 22.2769C10.3431 22.2769 9 20.9337 9 19.2769C9 17.971 9.83532 16.8628 11 16.4507V14.2769H6C3.23858 14.2769 1 12.0383 1 9.27686C1 6.51543 3.23858 4.27686 6 4.27686H18ZM12 18.2769C11.4477 18.2769 11 18.7246 11 19.2769C11 19.8291 11.4477 20.2769 12 20.2769C12.5523 20.2769 13 19.8291 13 19.2769C13 18.7246 12.5523 18.2769 12 18.2769ZM6 6.27686C4.34315 6.27686 3 7.62 3 9.27686C3 10.9337 4.34315 12.2769 6 12.2769H18C19.6569 12.2769 21 10.9337 21 9.27686C21 7.62 19.6569 6.27686 18 6.27686H6Z",
    fill: "#000"
  }));
});
NetworkDrive.displayName = 'NetworkDrive';
export { NetworkDrive };