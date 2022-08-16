function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Indicator = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Indicator"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7-3A7 7 0 0 0 5 8c0 1.933.5 3 2 5s3 3.5 3 6v4h4v-4c0-2.5 1.5-4 3-6s2-3.067 2-5z"
  }));
});
Indicator.displayName = 'Indicator';
export { Indicator };