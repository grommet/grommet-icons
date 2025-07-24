function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ProductHunt = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ProductHunt"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#DA552F",
    fillRule: "evenodd",
    d: "M13.59975,8.4 L13.59975,8.4 L10.2,8.4 L10.2,12 L13.59975,12 C14.59425,12 15.39975,11.19375 15.39975,10.2 C15.39975,9.20625 14.59425,8.4 13.59975,8.4 M13.59975,14.4 L13.59975,14.4 L10.2,14.4 L10.2,18 L7.8,18 L7.8,6 L13.59975,6 C15.9195,6 17.79975,7.88025 17.79975,10.2 C17.79975,12.51975 15.9195,14.4 13.59975,14.4 M12,0 C5.37225,0 0,5.37225 0,12 C0,18.62775 5.37225,24 12,24 C18.627,24 24,18.62775 24,12 C24,5.37225 18.627,0 12,0"
  }));
});
ProductHunt.displayName = 'ProductHunt';
export { ProductHunt };