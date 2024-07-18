function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Keyboard = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Keyboard"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    fill: "none",
    strokeWidth: "2",
    d: "M3 9h3m-3 3h2m-2 3h1m3 0h10m1 0h1m1 0h1m-3-3h3m-2-3h2m-5 0h2M7 9h2m1 0h2m1 0h2M5 15h1m0-3h2m1 0h2m1 0h2m1 0h2M1 7v10a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"
  }));
});
Keyboard.displayName = 'Keyboard';
export { Keyboard };