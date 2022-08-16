function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentWord = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentWord"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-9 6-1.5 6.75h-.25L9.5 12H9l-2.75 6.75H6L4.5 12H4l2 7h.5L9 12.5h.5L12 19h.5l2-7H14z"
  }));
});
DocumentWord.displayName = 'DocumentWord';
export { DocumentWord };