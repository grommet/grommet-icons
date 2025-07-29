function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Host = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Host"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 6H5V4H6V6Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V18C23 19.6569 21.6569 21 20 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H4C2.34315 21 1 19.6569 1 18V4C1 2.34315 2.34315 1 4 1H20ZM3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V15H3V18ZM3 13H21V9H3V13ZM4 3C3.44772 3 3 3.44772 3 4V7H21V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }));
});
Host.displayName = 'Host';
export { Host };