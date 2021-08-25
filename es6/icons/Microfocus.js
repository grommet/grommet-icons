function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Microfocus = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Microfocus"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#0078EF",
    fillRule: "evenodd",
    d: "M1 5h4v14h14v4H1V5zm4-4h18v18h-4V5H5V1z"
  }));
});
Microfocus.displayName = 'Microfocus';
export { Microfocus };