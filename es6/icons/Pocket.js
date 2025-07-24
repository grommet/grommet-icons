function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Pocket = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Pocket"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#F50057",
    d: "M12,2 L2,2 C0.8954305,2 0,2.8954305 0,4 C0,7 0,9 0,12 C0,17.9821415 6,23 12,23 C18,23 24,17.9821415 24,12 C24,9 24,7 24,4 C24,2.8954305 23.1045695,2 22,2 L12,2 Z"
  }), /*#__PURE__*/React.createElement("polyline", {
    stroke: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    points: "6 9 12.404 15 18 9"
  })));
});
Pocket.displayName = 'Pocket';
export { Pocket };