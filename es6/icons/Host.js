function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Host = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Host"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 6.27686H5V4.27686H6V6.27686Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1.27686C21.6569 1.27686 23 2.62 23 4.27686V18.2769C23 19.9337 21.6569 21.2769 20 21.2769H22C22.5523 21.2769 23 21.7246 23 22.2769C23 22.8291 22.5523 23.2769 22 23.2769H2C1.44772 23.2769 1 22.8291 1 22.2769C1 21.7246 1.44772 21.2769 2 21.2769H4C2.34315 21.2769 1 19.9337 1 18.2769V4.27686C1 2.62 2.34315 1.27686 4 1.27686H20ZM3 18.2769C3 18.8291 3.44772 19.2769 4 19.2769H20C20.5523 19.2769 21 18.8291 21 18.2769V15.2769H3V18.2769ZM3 13.2769H21V9.27686H3V13.2769ZM4 3.27686C3.44772 3.27686 3 3.72457 3 4.27686V7.27686H21V4.27686C21 3.72457 20.5523 3.27686 20 3.27686H4Z",
    fill: "#000"
  }));
});
Host.displayName = 'Host';
export { Host };