function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Ezmeral = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Ezmeral"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 8H41V16H7V8Z",
    fill: "#01A982"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 8H7V16H1V8Z",
    fill: "#00775B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41 8H47V16H41V8Z",
    fill: "#00775B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 16H41V22H7V16Z",
    fill: "#00775B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 2H41V8H7V2Z",
    fill: "#00C781"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 8L7 2V8H1Z",
    fill: "#01A982"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 16L7 22V16H1Z",
    fill: "#01A982"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M47 8L41 2V8H47Z",
    fill: "#01A982"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M47 16L41 22V16H47Z",
    fill: "#01A982"
  }));
});
Ezmeral.displayName = 'Ezmeral';
export { Ezmeral };