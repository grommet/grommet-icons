function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StreetView = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StreetView"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-1 18v-6h3v-2c0-3.34-2.76-5.97-6-6-3.21.03-6 2.66-6 6v2h3v6m-5.5 0h17-17z"
  }));
});
StreetView.displayName = 'StreetView';
export { StreetView };