function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Figma = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Figma"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16Z",
    fill: "#19BCFE"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 24C10.2091 24 12 22.2091 12 20C12 19.3969 12 18.0636 12 16C10.203 16 8.86971 16 8 16C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z",
    fill: "#09CF83"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 16C8.73638 16 10.0697 16 12 16V8C10.0697 8 8.73638 8 8 8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16Z",
    fill: "#A259FF"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 8C8.73638 8 10.0697 8 12 8V0C10.0697 0 8.73638 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z",
    fill: "#F24E1E"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 8H12V0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8Z",
    fill: "#FF7262"
  }));
});
Figma.displayName = 'Figma';
export { Figma };