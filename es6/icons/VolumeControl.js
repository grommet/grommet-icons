function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var VolumeControl = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "VolumeControl"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8 8l3 3m1 11a9.99 9.99 0 0 0 8.307-4.43A9.953 9.953 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12"
  }));
});
VolumeControl.displayName = 'VolumeControl';
export { VolumeControl };