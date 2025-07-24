function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentText = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentText"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 18H6V16H18V18Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14H6V12H18V14Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 10H6V8H11V10Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.8584 1C13.9635 1 15.0381 1.36603 15.9131 2.04102L21.0537 6.00684C22.2808 6.95346 22.9999 8.41603 23 9.96582V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H12.8584ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10H16C14.3431 10 13 8.65685 13 7V3.00488C12.953 3.00266 12.9056 3 12.8584 3H6ZM15 7C15 7.55228 15.4477 8 16 8H20.2637C20.1345 7.85131 19.9908 7.71331 19.832 7.59082L15 3.8623V7Z",
    fill: "#000"
  }));
});
DocumentText.displayName = 'DocumentText';
export { DocumentText };