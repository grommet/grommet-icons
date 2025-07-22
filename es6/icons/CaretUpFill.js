function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CaretUpFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CaretUpFill"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 15h12l-6-6-6 6z",
    fill: "#000"
  }));
});
CaretUpFill.displayName = 'CaretUpFill';
export { CaretUpFill };