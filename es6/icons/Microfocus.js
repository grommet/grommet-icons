function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Microfocus = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Microfocus"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#0078EF",
    fillRule: "evenodd",
    d: "M1 5h4v14h14v4H1V5zm4-4h18v18h-4V5H5V1z"
  }));
});
Microfocus.displayName = 'Microfocus';
export { Microfocus };