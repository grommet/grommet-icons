function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var RotateRight = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "RotateRight"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.48 3.43a9.09 9.09 0 0 1 5.82 2.12v-3.2h1.64v6.5h-6.5V7.21h4.26a7.46 7.46 0 1 0 1.47 8.65l1.46.73a9.11 9.11 0 1 1-8.15-13.16z"
  }));
});
RotateRight.displayName = 'RotateRight';
export { RotateRight };