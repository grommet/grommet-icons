function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentConfig = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentConfig"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23h-7m2-22v5h5M9 14v-3m0 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 3v-3m3-3h3M3 17h3m-1-4 2 2m4 4 2 2m0-8-2 2m-4 4-2 2"
  }));
});
DocumentConfig.displayName = 'DocumentConfig';
export { DocumentConfig };