function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Checkmark = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Checkmark"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.1544 1.46548C21.4494 0.998817 22.0675 0.859168 22.5343 1.15396C23.0011 1.44882 23.1405 2.06694 22.8458 2.53384L10.8458 21.5338C10.6898 21.7809 10.4328 21.9468 10.1437 21.9889C9.85466 22.0309 9.56177 21.9448 9.34191 21.7526L1.34191 14.7526C0.926481 14.389 0.883855 13.7571 1.24718 13.3415C1.61077 12.9262 2.24275 12.8835 2.65831 13.2467L9.77843 19.4762L21.1544 1.46548Z",
    fill: "#000"
  }));
});
Checkmark.displayName = 'Checkmark';
export { Checkmark };