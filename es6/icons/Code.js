function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Code = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Code"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.958 2.56396L9.95801 22.564L8.04199 21.9897L14.042 1.98975L15.958 2.56396Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.70703 7.98389L3.41406 12.2769L7.70703 16.5698L6.29297 17.9839L0.585938 12.2769L6.29297 6.56982L7.70703 7.98389Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.4141 12.2769L17.707 17.9839L16.293 16.5698L20.5859 12.2769L16.293 7.98389L17.707 6.56982L23.4141 12.2769Z",
    fill: "#000"
  }));
});
Code.displayName = 'Code';
export { Code };