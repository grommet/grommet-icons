function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Webcam = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Webcam"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 22H4",
    stroke: "#000",
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 18v3m-7.5.5V18",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M12 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }));
});
Webcam.displayName = 'Webcam';
export { Webcam };