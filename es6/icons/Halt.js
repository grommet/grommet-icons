function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Halt = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Halt"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 23h7c3 0 4-2 4-5V6c0-2-1-2-1.5-2S16 4 16 6v7-9c0-1 0-2-1.5-2S13 3 13 4v9V3c0-1 0-2-1.5-2S10 2 10 3v10-9c0-1 .03-2-1.5-2C7 2 7 3 7 4v14-4c0-1-.55-2-2-2H4v6c0 3.962 2 5.024 4 5z"
  }));
});
Halt.displayName = 'Halt';
export { Halt };