function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Moon = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Moon"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m18.25 18.78.531.846a1 1 0 0 0-.282-1.815l-.25.968zm0-13.56.249.97a1 1 0 0 0 .282-1.816l-.532.847zM14 21a8.962 8.962 0 0 0 4.781-1.374l-1.063-1.694A6.962 6.962 0 0 1 14 19v2zm-9-9a9 9 0 0 0 9 9v-2a7 7 0 0 1-7-7H5zm9-9a9 9 0 0 0-9 9h2a7 7 0 0 1 7-7V3zm4.781 1.374A8.962 8.962 0 0 0 14 3v2c1.368 0 2.641.391 3.718 1.067l1.063-1.693zm-.78-.122A8.004 8.004 0 0 0 12 12h2a6.003 6.003 0 0 1 4.499-5.81L18 4.251zM12 12c0 3.729 2.55 6.86 6 7.748l.499-1.937A6.003 6.003 0 0 1 14 12h-2z",
    fill: "#000"
  }));
});
Moon.displayName = 'Moon';
export { Moon };