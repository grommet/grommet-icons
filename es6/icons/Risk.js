function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Risk = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Risk"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 10h1V9h-1v1zm4 0h1V9h-1v1zm0-4h1V5h-1v1zm-4 0h1V5h-1v1zM9 19h1v-1H9v1zm-4-4h1v-1H5v1zm5-5H1v13h13v-9m-4 0h13V1H10v13z"
  }));
});
Risk.displayName = 'Risk';
export { Risk };