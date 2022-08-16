function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var RotateLeft = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "RotateLeft"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.52 3.43A9.09 9.09 0 0 0 5.7 5.55v-3.2H4.07v6.5h6.5V7.21H6.3a7.46 7.46 0 1 1-1.47 8.65l-1.46.73a9.11 9.11 0 1 0 8.15-13.16z"
  }));
});
RotateLeft.displayName = 'RotateLeft';
export { RotateLeft };