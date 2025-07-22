function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Inherit = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Inherit"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#231F20",
    strokeWidth: "2",
    d: "m17 18-5-3 5 3zM7 18l5-3v-4m5 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17 6a5 5 0 1 1-10.001-.001A5 5 0 0 1 17 6z"
  }));
});
Inherit.displayName = 'Inherit';
export { Inherit };