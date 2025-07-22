function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ObjectUngroup = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ObjectUngroup"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h3v3H1V1zm12 0h3v3h-3V1zM4 2h9m2 7h5M4 15h9M1 13h3v3H1v-3zm12 0h3v3h-3v-3zM2 4v9m13-9v9m5-5h3v3h-3V8zm-9 14h9M8 20h3v3H8v-3zm12 0h3v3h-3v-3zM9 16v4m13-9v9"
  }));
});
ObjectUngroup.displayName = 'ObjectUngroup';
export { ObjectUngroup };