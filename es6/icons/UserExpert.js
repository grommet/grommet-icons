function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UserExpert = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserExpert"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm6.643 4.696a6.745 6.745 0 0 0-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22 23 13"
  }));
});
UserExpert.displayName = 'UserExpert';
export { UserExpert };