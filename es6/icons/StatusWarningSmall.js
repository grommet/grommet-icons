function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusWarningSmall = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 12 12",
    a11yTitle: "Status is warning"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeLinejoin: "round",
    d: "m6 1 5 9H1z"
  }));
});
StatusWarningSmall.displayName = 'StatusWarningSmall';
export { StatusWarningSmall };