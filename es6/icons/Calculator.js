function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Calculator = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Calculator"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 23H2V1h20v22zm-6-6h2v2h-2v-2zm-5 0h2v2h-2v-2zm5-5h2v2h-2v-2zm-5 0h2v2h-2v-2zm-5 5h2v2H6v-2zm0-5h2v2H6v-2zm12-3H6V5h12v4z"
  }));
});
Calculator.displayName = 'Calculator';
export { Calculator };