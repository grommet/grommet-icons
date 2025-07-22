function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var VirtualStorage = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "VirtualStorage"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5zm0-4.5c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5zm0-5.5c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5z"
  }));
});
VirtualStorage.displayName = 'VirtualStorage';
export { VirtualStorage };