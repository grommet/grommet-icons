function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ObjectGroup = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ObjectGroup"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h3v3H1V1zm19 0h3v3h-3V1zM4 2h16M4 22h16M1 20h3v3H1v-3zm19 0h3v3h-3v-3zM2 4v16M22 4v16M7 7h7v6H7V7zm10 3v7h-7v-2"
  }));
});
ObjectGroup.displayName = 'ObjectGroup';
export { ObjectGroup };