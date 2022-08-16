function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var License = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "License"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 13v3h3v3h3v2l2 2h5v-4L12.74 8.74C12.91 8.19 13 7.6 13 7c0-3.31-2.69-6-6-6S1 3.69 1 7a6.005 6.005 0 0 0 8.47 5.47L10 13zM6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
});
License.displayName = 'License';
export { License };