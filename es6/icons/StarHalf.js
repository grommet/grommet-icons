function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StarHalf = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StarHalf"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    fillOpacity: ".2",
    d: "M12 16.667V2l2.5 7.5H22L16 14l3 8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFC95E",
    d: "M12 16.667 5 22l3-8-6-4.5h7.5L12 2z"
  })));
});
StarHalf.displayName = 'StarHalf';
export { StarHalf };