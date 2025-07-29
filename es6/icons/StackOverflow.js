function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StackOverflow = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StackOverflow"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19.127 15.436H21.261V24H2V15.437H4.134V21.867H19.127V15.436Z",
    fill: "#BCBBBB"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.49 14.827L16.965 17.017L17.409 14.91L6.933 12.72L6.49 14.827ZM7.875 9.838L17.575 14.356L18.462 12.416L8.762 7.871L7.875 9.838ZM10.563 5.072L18.794 11.917L20.152 10.282L11.922 3.436L10.563 5.072ZM15.884 0L14.166 1.275L20.54 9.866L22.259 8.591L15.884 0ZM6.268 19.704H16.965V17.57H6.268V19.704Z",
    fill: "#F48023"
  }));
});
StackOverflow.displayName = 'StackOverflow';
export { StackOverflow };