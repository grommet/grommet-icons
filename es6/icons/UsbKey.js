function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UsbKey = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UsbKey"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h14v-1h7V7h-7V6H3zm14 3v5h5V9h-5zm-2 6V8H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12zm4-3.992h1.01v-1.01H19v1.01zm.51 2h-.5v-1.01h1.01v1.01h-.51z",
    fill: "#000"
  }));
});
UsbKey.displayName = 'UsbKey';
export { UsbKey };