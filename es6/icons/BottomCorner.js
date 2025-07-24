function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var BottomCorner = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "BottomCorner"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 1C22.5523 1 23 1.44772 23 2V22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H21V2C21 1.44772 21.4477 1 22 1Z",
    fill: "#000"
  }));
});
BottomCorner.displayName = 'BottomCorner';
export { BottomCorner };