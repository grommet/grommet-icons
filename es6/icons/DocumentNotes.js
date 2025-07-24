function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentNotes = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentNotes"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00005 15.8682 1.42739 16.7744 2.2041L21.2529 6.04297C22.3612 6.99288 23 8.38022 23 9.83984V18C23 20.7614 20.7614 23 18 23H15C14.4477 23 14 22.5523 14 22C14 21.4477 14.4477 21 15 21H18C19.6569 21 21 19.6569 21 18V9.83984C21 9.55255 20.9577 9.27017 20.8789 9H17C15.3431 9 14 7.65685 14 6V3.04004C13.8423 3.01447 13.6821 3.00001 13.5205 3H6C4.34315 3 3 4.34315 3 6V8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8V6C1 3.23858 3.23858 1 6 1H13.5205ZM16 6C16 6.55228 16.4477 7 17 7H19.2969L16 4.17383V6Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 17.8848V13H11V22H9.00781L5.25 17.1152V22H3V13H4.99219L8.75 17.8848Z",
    fill: "#000"
  }));
});
DocumentNotes.displayName = 'DocumentNotes';
export { DocumentNotes };