function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var TestDesktop = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "TestDesktop"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18.218 1H23v18H1V1h5m11 9c-4-3-6 3-10 0M5 23h14H5zm5-22v4.773l-5 7.182V15h14v-2.045l-5-7.182V1M8 1h8-8zm0 22h8v-4H8v4z"
  }));
});
TestDesktop.displayName = 'TestDesktop';
export { TestDesktop };