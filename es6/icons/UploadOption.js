function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UploadOption = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UploadOption"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    fill: "none",
    d: "m17 12-5-5-5 5m5-4v10m0 5c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
  }));
});
UploadOption.displayName = 'UploadOption';
export { UploadOption };