function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Unsorted = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Unsorted"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m15.204 15.321 1.597-1.597.707.707-2.45 2.45-.354.354-.353-.353-2.45-2.45.707-.708 1.596 1.597V7.217h1v8.104zm-5.9-6.407v8.104h1V8.914l1.597 1.597.707-.707-2.45-2.45L9.803 7l-.354.354L7 9.804l.707.707 1.597-1.597z",
    fill: "#000"
  }));
});
Unsorted.displayName = 'Unsorted';
export { Unsorted };