function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CaretUpFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CaretUpFill"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.3789 6.79328C11.16 6.01228 12.426 6.01225 13.2071 6.79328L20.793 14.3792C22.0526 15.6391 21.1605 17.7931 19.3789 17.7933H4.20705C2.42533 17.7932 1.53322 15.6392 2.79299 14.3792L10.3789 6.79328Z",
    fill: "#000"
  }));
});
CaretUpFill.displayName = 'CaretUpFill';
export { CaretUpFill };