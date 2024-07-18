function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Npm = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Npm"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#D40001",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFF",
    d: "M16.718 7.928h-4.513V20.25H4V3h16v17.249h-3.282V7.93z"
  })));
});
Npm.displayName = 'Npm';
export { Npm };