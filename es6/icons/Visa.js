function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Visa = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Visa"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.75605 6.34212C4.34406 5.55922 2.7329 4.92989 0.931152 4.49373L0.989776 4.14311H8.39658C9.39422 4.1803 10.2007 4.49873 10.4787 5.56583L12.0891 13.3092C12.089 13.3089 12.0892 13.3094 12.0891 13.3092L12.5685 15.6454L17.0656 4.15353H21.9312L14.6997 20.9732L9.83979 20.9788L5.75605 6.34212Z",
    fill: "#1A1F71"
  }));
});
Visa.displayName = 'Visa';
export { Visa };