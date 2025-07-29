function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var X = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "X"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0.058 1L9.325 13.39L0 23.462H2.099L10.262 14.642L16.858 23.462H24L14.212 10.375L22.892 1H20.792L13.275 9.122L7.2 1H0.058ZM3.145 2.546H6.425L20.913 21.916H17.633L3.145 2.546Z",
    fill: "black"
  }));
});
X.displayName = 'X';
export { X };