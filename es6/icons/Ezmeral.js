function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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