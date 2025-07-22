function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Overview = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Overview"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM10 7h4M1.5 14.5S5.5 5 6 4s1.5-1 2-1 2 0 2 2v11m-4.5 5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm17-6.5S18.5 5 18 4s-1.5-1-2-1-2 0-2 2v11m-4 0h4"
  }));
});
Overview.displayName = 'Overview';
export { Overview };