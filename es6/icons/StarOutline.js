function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StarOutline = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Star"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    fill: "none",
    strokeWidth: "2",
    d: "M12.606 16.805 12 16.343l-.606.462L5.755 21.1l2.381-6.35.263-.701-.599-.45L3 10h6.72l.229-.684L12 3.162l2.051 6.154.228.684H21l-4.8 3.6-.6.45.264.701 2.38 6.35-5.638-4.296Z"
  }));
});
StarOutline.displayName = 'StarOutline';
export { StarOutline };