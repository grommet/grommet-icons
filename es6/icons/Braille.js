function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Braille = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Braille"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10-10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }));
});
Braille.displayName = 'Braille';
export { Braille };