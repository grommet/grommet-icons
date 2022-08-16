function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var FanOption = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FanOption"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "1",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "10",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 9.5c.5-.333.9-1.7.5-2.5S13.333 5.667 13 5.5m1 5c1.5-2 0-3.5-2.5-5-1.546-.927 2-1.5 4.5.5 1.875 1.5 1 2.5-2 5.5v-1zm-5.015 3.902c-.5.333-.9 1.7-.5 2.5s2.167 1.333 2.5 1.5m-1-5c-1.5 2 0 3.5 2.5 5 1.546.927-2 1.5-4.5-.5-1.875-1.5-1-2.5 2-5.5v1zm-.443-4.458c-.334-.5-1.7-.9-2.5-.5s-1.334 2.166-1.5 2.5m5-1c-2-1.5-3.5 0-5 2.5-.928 1.546-1.5-2 .5-4.5 1.5-1.875 2.5-1 5.5 2h-1zm3.902 5.014c.333.5 1.7.9 2.5.5s1.333-2.166 1.5-2.5m-5 1c2 1.5 3.5 0 5-2.5.927-1.546 1.5 2-.5 4.5-1.5 1.876-2.5 1-5.5-2h1z",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm17 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    stroke: "#000",
    strokeWidth: "2"
  }));
});
FanOption.displayName = 'FanOption';
export { FanOption };