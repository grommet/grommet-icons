function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Turbolinux = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Turbolinux"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#528DC4",
    fillRule: "evenodd",
    d: "m9.419 6.222.547 1.23h-3.35L6 6.223h3.419zm3.692 5.949L7.094 0l7.042 4.17.41 1.984h3.351l-.752 2.051h-2.188l1.778 8.274-4.171-2.052L14.684 24 8.187 10.803l4.923 1.368z"
  }));
});
Turbolinux.displayName = 'Turbolinux';
export { Turbolinux };