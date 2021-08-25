function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Technology = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Technology"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm.5 6 8-8M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13-13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 21l2-2"
  }));
});
Technology.displayName = 'Technology';
export { Technology };