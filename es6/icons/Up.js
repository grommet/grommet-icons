function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Up = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Up"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.3692 6.22486C11.762 5.90451 12.341 5.92711 12.7071 6.29322L22.7071 16.2932C23.0975 16.6838 23.0976 17.3168 22.7071 17.7073C22.3166 18.0977 21.6835 18.0976 21.293 17.7073L12.0001 8.41432L2.7071 17.7073C2.31662 18.0977 1.68355 18.0976 1.29304 17.7073C0.902539 17.3168 0.90259 16.6838 1.29304 16.2932L11.293 6.29322L11.3692 6.22486Z",
    fill: "#000"
  }));
});
Up.displayName = 'Up';
export { Up };