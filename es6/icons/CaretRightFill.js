function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CaretRightFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CaretRightFill"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 4.41402C6.00004 2.63226 8.15414 1.74007 9.41406 2.99996L17 10.5859C17.7809 11.3669 17.781 12.633 17 13.414L9.41406 21C8.19346 22.2204 6.13332 21.4211 6.00586 19.75L6 19.5859V4.41402Z",
    fill: "#000"
  }));
});
CaretRightFill.displayName = 'CaretRightFill';
export { CaretRightFill };