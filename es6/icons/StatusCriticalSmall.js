function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var StatusCriticalSmall = function StatusCriticalSmall(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusCriticalSmall"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    d: "M6.712 1.263a1.005 1.005 0 0 0-1.424 0L1.263 5.288a1.005 1.005 0 0 0 0 1.424l4.025 4.025a1.005 1.005 0 0 0 1.424 0l4.025-4.025a1.005 1.005 0 0 0 0-1.424L6.712 1.263z"
  }));
};