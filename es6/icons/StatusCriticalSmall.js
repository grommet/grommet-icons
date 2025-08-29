function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusCriticalSmall = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StatusCriticalSmall"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.557 1.64693C12.6971 0.787004 11.3082 0.781712 10.4429 1.64693L1.6469 10.443C0.786974 11.3029 0.781681 12.6918 1.6469 13.557L10.4429 22.3531C11.3029 23.213 12.6918 23.2183 13.557 22.3531L22.353 13.557C23.213 12.6971 23.2183 11.3082 22.353 10.443L13.557 1.64693Z",
    fill: "#000"
  }));
});
StatusCriticalSmall.displayName = 'StatusCriticalSmall';
export { StatusCriticalSmall };