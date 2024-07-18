function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UserNew = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserNew"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 24V12m5 10-10-7m10 0-10 7M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10"
  }));
});
UserNew.displayName = 'UserNew';
export { UserNew };