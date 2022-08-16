function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var PhoneFlip = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneFlip"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 1a1 1 0 0 0-.928.629l-4 10a1 1 0 0 0 0 .742l4 10A1 1 0 0 0 8 23h10a1 1 0 0 0 .928-1.371L15.078 12l3.851-9.629A1 1 0 0 0 18 1H8zM5.477 11l3.2-8h2.794a1 1 0 0 0 1 1h.057a1 1 0 0 0 1.001-1h2.994l-3.2 8H5.477zm0 2 3.2 8h7.846l-3.2-8H5.477zm5.558 6.773a1 1 0 0 1 .937-1.351h.056a1 1 0 1 1 0 2h-.056a1 1 0 0 1-.937-.649z",
    fill: "#000"
  }));
});
PhoneFlip.displayName = 'PhoneFlip';
export { PhoneFlip };