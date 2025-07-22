function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Ezmeral = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 48 24",
    a11yTitle: "Ezmeral"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 8h34v8H7V8z",
    fill: "#01A982"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 8h6v8H1V8zm40 0h6v8h-6V8zM7 16h34v6H7v-6z",
    fill: "#00775B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 2h34v6H7V2z",
    fill: "#00C781"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m1 8 6-6v6H1zm0 8 6 6v-6H1zm46-8-6-6v6h6zm0 8-6 6v-6h6z",
    fill: "#01A982"
  }));
});
Ezmeral.displayName = 'Ezmeral';
export { Ezmeral };