function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ShieldSecurity = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ShieldSecurity"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22s-9-4-9-11V5l9-3 9 3v6c0 7-9 11-9 11zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6V5m0 12v-3m-6-3h3m6 0h3M8 7l2 2m4 4 2 2m0-8-2 2m-4 4-2 2"
  }));
});
ShieldSecurity.displayName = 'ShieldSecurity';
export { ShieldSecurity };