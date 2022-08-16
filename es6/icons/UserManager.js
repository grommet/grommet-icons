function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UserManager = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserManager"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 12c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 1a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm6-6c-1.5 0-3 .36-5-2-2 2.36-4.5 3-7 2m1 6 5.025 5.257L17 13m-5 5v5"
  }));
});
UserManager.displayName = 'UserManager';
export { UserManager };