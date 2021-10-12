function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusGoodSmall = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 12 12",
    a11yTitle: "Status is okay"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "5",
    fillRule: "evenodd",
    stroke: "#000"
  }));
});
StatusGoodSmall.displayName = 'StatusGoodSmall';
export { StatusGoodSmall };