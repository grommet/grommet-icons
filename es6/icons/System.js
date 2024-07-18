function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var System = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "System"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 19h22V1H1v18zm4 4h14H5zm3 0h8v-4H8v4zM7.757 5.757l2.122 2.122-2.122-2.122zM9 10H6h3zm.879 2.121-2.122 2.122 2.122-2.122zM12 13v3-3zm2.121-.879 2.122 2.122-2.122-2.122zM18 10h-3 3zm-1.757-4.243-2.122 2.122 2.122-2.122zM12 7V4v3zm0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
  }));
});
System.displayName = 'System';
export { System };