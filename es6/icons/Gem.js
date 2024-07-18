function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Gem = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gem"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 1h-.414l-.293.293-3 3L3 4.586v14.828l.293.293 3 3 .293.293h10.828l.293-.293 3-3 .293-.293V4.586l-.293-.293-3-3L17.414 1H7zM5 6v12h1V6H5zm3 15h8v-1H8v1zm11-3V6h-1v12h1zM16 3H8v1h8V3zm0 3v12H8V6h8z",
    fill: "#000"
  }));
});
Gem.displayName = 'Gem';
export { Gem };