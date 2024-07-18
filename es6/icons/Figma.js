function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Figma = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Figma"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(4)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    fill: "#19BCFE"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#09CF83",
    d: "M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#A259FF",
    d: "M4 16h4V8H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F24E1E",
    d: "M4 8h4V0H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FF7262",
    d: "M12 8H8V0h4a4 4 0 1 1 0 8z"
  })));
});
Figma.displayName = 'Figma';
export { Figma };