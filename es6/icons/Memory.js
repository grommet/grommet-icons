function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Memory = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Memory"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3a2 2 0 0 0-2 2H1v2h2v2H1v2h2v2H1v2h2v2H1v2h2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2v-2h-2v-2h2v-2h-2v-2h2V9h-2V7h2V5h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2h-2a2 2 0 0 0-2-2H5zm6 4v2h2V7h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zM5 5h4v14H5V5zm10 0h4v14h-4V5z",
    fill: "#000"
  }));
});
Memory.displayName = 'Memory';
export { Memory };