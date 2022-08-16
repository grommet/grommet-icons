function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var WheelchairActive = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WheelchairActive"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m7 6 3-3 7 3v2l-3 3M9 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-5 5 3-2 6m2-17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 6 4-4m-6 4 4-4"
  }));
});
WheelchairActive.displayName = 'WheelchairActive';
export { WheelchairActive };