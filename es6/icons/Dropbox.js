function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Dropbox = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dropbox"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#007EE5",
    fillRule: "evenodd",
    d: "M7.06 1 0 5.61l4.882 3.908L12 5.123 7.06 1zM0 13.428l7.06 4.61L12 13.914 4.882 9.52 0 13.43zm12 .486 4.94 4.124 7.06-4.61-4.882-3.91L12 13.914zM24 5.61 16.94 1 12 5.124l7.118 4.395L24 5.609zM12.014 14.8 7.06 18.913l-2.12-1.385v1.552l7.074 4.243 7.075-4.243v-1.552l-2.12 1.385-4.955-4.112z"
  }));
});
Dropbox.displayName = 'Dropbox';
export { Dropbox };