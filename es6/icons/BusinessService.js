function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var BusinessService = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "BusinessService"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 23H1V5h22v18h-7M8 5V1h8v4M9 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.008 1.876a4 4 0 1 0-1.244-7.193m-5.062 5.043A4 4 0 0 0 10 23a4 4 0 0 0 1.401-7.748"
  }));
});
BusinessService.displayName = 'BusinessService';
export { BusinessService };