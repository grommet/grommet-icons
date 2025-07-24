function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var PauseFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PauseFill"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 1C8.20914 1 10 2.79086 10 5V19C10 21.2091 8.20914 23 6 23C3.79086 23 2 21.2091 2 19V5C2 2.79086 3.79086 1 6 1Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 1C20.2091 1 22 2.79086 22 5V19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19V5C14 2.79086 15.7909 1 18 1Z",
    fill: "#000"
  }));
});
PauseFill.displayName = 'PauseFill';
export { PauseFill };