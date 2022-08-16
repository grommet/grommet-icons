function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var FolderCycle = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FolderCycle"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 18a5 5 0 0 1 5-5c1.985 0 3.7 1.156 4.5 3m.5 2a5 5 0 0 1-5 5c-1.985 0-3.699-1.156-4.5-3m5.5-4h4v-4m-6 8H7v4m-3-1H1V1h8l3 4h11v18h-4M1 9h22M4 23H1V1h8l3 4h11v18h-4M1 9h22"
  }));
});
FolderCycle.displayName = 'FolderCycle';
export { FolderCycle };