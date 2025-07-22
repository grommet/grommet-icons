function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentUpdate = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentUpdate"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 7V1H17.5L21 4.5V23h-6m1-22v5h5M8 23A7 7 0 1 0 8 9a7 7 0 0 0 0 14zm-3.5-6.5L8 13l3.5 3.5m-3.5-3V20"
  }));
});
DocumentUpdate.displayName = 'DocumentUpdate';
export { DocumentUpdate };