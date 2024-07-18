function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var FlagFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FlagFill"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 24V2c8-3.524 11 4.644 20 0v12c-8 4.895-13-4.103-20 0"
  }));
});
FlagFill.displayName = 'FlagFill';
export { FlagFill };