function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentVerified = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentVerified"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.207 13.207L8 18.4141L5.29297 15.707C4.90244 15.3165 4.90244 14.6835 5.29297 14.293C5.68349 13.9024 6.31651 13.9024 6.70703 14.293L8 15.5859L11.793 11.793L13.207 13.207Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00005 15.8682 1.42739 16.7744 2.2041L21.2539 6.04395C22.362 6.99385 23 8.38031 23 9.83984V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H13.5205ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10H16C14.3431 10 13 8.65685 13 7V3H6ZM15 7C15 7.55228 15.4477 8 16 8H20.3682C20.2453 7.8419 20.1067 7.69403 19.9521 7.56152L15.4727 3.72266C15.3254 3.59641 15.1666 3.48613 15 3.3916V7Z",
    fill: "#000"
  }));
});
DocumentVerified.displayName = 'DocumentVerified';
export { DocumentVerified };