function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Plug = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Plug"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    fill: "none",
    d: "M15 6V1m-3 23v-9M9 6V1M6 6h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6z"
  }));
});
Plug.displayName = 'Plug';
export { Plug };