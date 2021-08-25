function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var VirtualStorage = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "VirtualStorage"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5zm0-4.5c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5zm0-5.5c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5z"
  }));
});
VirtualStorage.displayName = 'VirtualStorage';
export { VirtualStorage };