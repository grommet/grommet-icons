function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Braille = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Braille"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10-10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }));
});
Braille.displayName = 'Braille';
export { Braille };