function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Aed = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Aed"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 8.4C2 4 5 3 7 3s4 2 5 3.5C13 5 15 3 17 3s5 1 5 5.4C22 15 12 21 12 21S2 15 2 8.4zM12 6c-.5-.5-2 4-2 4h2v2.5L14 9h-2s1-6 5-6c-4 0-5 3-5 3z"
  }));
});
Aed.displayName = 'Aed';
export { Aed };