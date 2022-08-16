function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Stakeholder = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Stakeholder"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m14 9 4.5 2L23 9V4l-4.5-2L14 4v5zM7 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM1 23v-2c0-4 2.5-6 6-6s6 2 6 6v2H1zM14 4l4.5 2L23 4m-4.5 2v5-5z"
  }));
});
Stakeholder.displayName = 'Stakeholder';
export { Stakeholder };