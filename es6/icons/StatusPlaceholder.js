function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusPlaceholder = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Placeholder Status"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    rx: "2"
  }));
});
StatusPlaceholder.displayName = 'StatusPlaceholder';
export { StatusPlaceholder };