function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CaretPrevious = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CaretPrevious"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5862 3.00012C15.8461 1.7404 18.0002 2.63247 18.0003 4.41418V19.5861C18 21.3675 15.8461 22.2596 14.5862 21.0001L7.00025 13.4142C6.21922 12.6331 6.21925 11.3671 7.00025 10.5861L14.5862 3.00012ZM8.41431 12.0001L16.0003 19.5861V4.41418L8.41431 12.0001Z",
    fill: "#000"
  }));
});
CaretPrevious.displayName = 'CaretPrevious';
export { CaretPrevious };