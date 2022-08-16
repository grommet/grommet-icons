function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusPlaceholder = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Placeholder Status"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    rx: "2"
  }));
});
StatusPlaceholder.displayName = 'StatusPlaceholder';
export { StatusPlaceholder };