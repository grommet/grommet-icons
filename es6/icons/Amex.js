function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Amex = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Amex"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#002663",
    fillRule: "evenodd",
    d: "m4.314 11.965-.82-1.997-.815 1.997h1.635zm7.859 2.161-.005-3.922-1.736 3.922h-1.05L7.64 10.2v3.926H5.206l-.46-1.117H2.253l-.465 1.117h-1.3l2.144-5.008H4.41l2.036 4.742V9.118H8.4l1.567 3.397 1.439-3.397H13.4v5.008h-1.227zm3.133-1.024v-.997h2.628v-1.022h-2.628v-.911h3.001l1.31 1.46-1.368 1.47h-2.943zm8.111 1.044h-1.556l-1.474-1.659-1.532 1.659h-4.742v-5.01h4.815l1.473 1.642 1.523-1.642h1.564l-2.327 2.505 2.256 2.505z"
  }));
});
Amex.displayName = 'Amex';
export { Amex };