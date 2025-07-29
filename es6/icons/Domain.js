function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Domain = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Domain"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13 4C13.5523 4 14 4.44772 14 5V5.00977C14 5.56205 13.5523 6.00977 13 6.00977C12.4477 6.00977 12 5.56205 12 5.00977V5C12 4.44772 12.4477 4 13 4Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4C16.5523 4 17 4.44772 17 5V5.00977C17 5.56205 16.5523 6.00977 16 6.00977C15.4477 6.00977 15 5.56205 15 5.00977V5C15 4.44772 15.4477 4 16 4Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 4C19.5523 4 20 4.44772 20 5V5.00977C20 5.56205 19.5523 6.00977 19 6.00977C18.4477 6.00977 18 5.56205 18 5.00977V5C18 4.44772 18.4477 4 19 4Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }));
});
Domain.displayName = 'Domain';
export { Domain };