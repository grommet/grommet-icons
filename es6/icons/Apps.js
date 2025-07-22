function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Apps = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Apps"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 5h2V3h-2v2zm-8 0h2V3h-2v2zM3 5h2V3H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2z"
  }));
});
Apps.displayName = 'Apps';
export { Apps };