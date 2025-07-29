function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ProductHunt = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ProductHunt"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5997 8.4H10.2V12H13.5997C14.5942 12 15.3997 11.1937 15.3997 10.2C15.3997 9.20625 14.5942 8.4 13.5997 8.4ZM13.5997 14.4H10.2V18H7.8V6H13.5997C15.9195 6 17.7997 7.88025 17.7997 10.2C17.7997 12.5197 15.9195 14.4 13.5997 14.4ZM12 0C5.37225 0 0 5.37225 0 12C0 18.6278 5.37225 24 12 24C18.627 24 24 18.6278 24 12C24 5.37225 18.627 0 12 0Z",
    fill: "#DA552F"
  }));
});
ProductHunt.displayName = 'ProductHunt';
export { ProductHunt };