function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var WifiMedium = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WifiMedium"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0"
  }), /*#__PURE__*/React.createElement("path", {
    strokeOpacity: ".2",
    d: "M2.1 8.1c5.468-5.467 14.332-5.467 19.8 0",
    opacity: ".8"
  })));
});
WifiMedium.displayName = 'WifiMedium';
export { WifiMedium };