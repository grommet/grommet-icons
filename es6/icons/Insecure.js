function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Insecure = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Insecure"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 6.919V6a4.724 4.724 0 0 1 5-5 4.724 4.724 0 0 1 5 5v5.052M12 23a7 7 0 1 0-7-7 7 7 0 0 0 7 7zm2.985-7h-5.97"
  }));
});
Insecure.displayName = 'Insecure';
export { Insecure };