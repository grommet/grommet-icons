function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var GooglePlay = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlay"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#444",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinejoin: "round",
    d: "M3 2v20l18-10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 2 11 14M3 22 14 8"
  })));
});
GooglePlay.displayName = 'GooglePlay';
export { GooglePlay };