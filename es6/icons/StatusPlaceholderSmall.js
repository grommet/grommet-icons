function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusPlaceholderSmall = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 12 12",
    a11yTitle: "Placeholder Status"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "10",
    height: "10",
    x: "1",
    y: "1",
    fillRule: "evenodd",
    stroke: "#000",
    rx: "1"
  }));
});
StatusPlaceholderSmall.displayName = 'StatusPlaceholderSmall';
export { StatusPlaceholderSmall };