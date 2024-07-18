function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Bold = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Bold"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 11.57a7.93 7.93 0 0 1 3.11 1.25 3.32 3.32 0 0 1 1.28 2.71A3.58 3.58 0 0 1 17 18.42a7.9 7.9 0 0 1-5 1.39H4.07v-.42a3.57 3.57 0 0 0 1.46-.2 1.17 1.17 0 0 0 .54-.52 4.75 4.75 0 0 0 .15-1.58V7a4.81 4.81 0 0 0-.15-1.6 1.13 1.13 0 0 0-.54-.52 3.67 3.67 0 0 0-1.46-.2v-.42h7.45a10.57 10.57 0 0 1 3.78.48 3.94 3.94 0 0 1 1.75 1.42 3.52 3.52 0 0 1 .64 2 2.86 2.86 0 0 1-.81 2A5.84 5.84 0 0 1 14 11.57zm-4.17.58v5.56a1.27 1.27 0 0 0 .32.93 1.27 1.27 0 0 0 .93.31 3.57 3.57 0 0 0 1.69-.41A2.79 2.79 0 0 0 14 17.37a3.61 3.61 0 0 0 .41-1.73 3.81 3.81 0 0 0-.5-2 2.72 2.72 0 0 0-1.39-1.21 7.52 7.52 0 0 0-2.67-.28zm0-.89a5.92 5.92 0 0 0 2.4-.37 2.73 2.73 0 0 0 1.19-1 3.17 3.17 0 0 0 .41-1.7 3.18 3.18 0 0 0-.41-1.69 2.59 2.59 0 0 0-1.16-1 6.2 6.2 0 0 0-2.43-.33z"
  }));
});
Bold.displayName = 'Bold';
export { Bold };