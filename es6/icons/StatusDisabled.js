function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusDisabled = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Status is disabled"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 3.99C2 2.892 2.898 2 3.99 2h16.02C21.108 2 22 2.898 22 3.99v16.02c0 1.099-.898 1.99-1.99 1.99H3.99A1.995 1.995 0 0 1 2 20.01V3.99zM18 12H6"
  }));
});
StatusDisabled.displayName = 'StatusDisabled';
export { StatusDisabled };