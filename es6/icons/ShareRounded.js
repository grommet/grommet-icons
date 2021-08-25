function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ShareRounded = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ShareRounded"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.924 3.617a.997.997 0 0 0-.215-.322l-.004-.004A.997.997 0 0 0 20 3h-6a1 1 0 1 0 0 2h3.586l-7.293 7.293a1 1 0 1 0 1.414 1.414L19 6.414V10a1 1 0 1 0 2 0V3.997a.999.999 0 0 0-.076-.38zM3 8a5 5 0 0 1 5-5h1a1 1 0 0 1 0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1a1 1 0 1 1 2 0v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z",
    fill: "#000"
  }));
});
ShareRounded.displayName = 'ShareRounded';
export { ShareRounded };