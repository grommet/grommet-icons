function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var LogoHpeLabs = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LogoHpeLabs"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.38623 1H19.3862V16H13.3862V7H11.3862V18H21.3862V20H9.38623V5H15.3862V14H17.3862V3H7.38623V22H15.3862V24H5.38623V1Z",
    fill: "#01A982"
  }));
});
LogoHpeLabs.displayName = 'LogoHpeLabs';
export { LogoHpeLabs };