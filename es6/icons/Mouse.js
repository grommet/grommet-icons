function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Mouse = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mouse"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 9a6 6 0 1 1 12 0v6a6 6 0 0 1-12 0V9zm2 2v4a4 4 0 0 0 8 0v-4H8zm8-2a4.002 4.002 0 0 0-3-3.874V9h3zm-5 0H8a4.002 4.002 0 0 1 3-3.874V9z",
    fill: "#000"
  }));
});
Mouse.displayName = 'Mouse';
export { Mouse };