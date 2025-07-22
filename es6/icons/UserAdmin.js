function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UserAdmin = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserAdmin"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h7m2-3.5a2.5 2.5 0 1 0 5.002-.002A2.5 2.5 0 0 0 10 19.5zM23 15l-3-3-6 6m3.5-3.5 3 3-3-3z"
  }));
});
UserAdmin.displayName = 'UserAdmin';
export { UserAdmin };