function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var PhoneFlip = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneFlip"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.9995 6.27686H10.9995V4.27686H14.9995V6.27686Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.3814 1.27686C19.8218 1.27686 20.7747 2.74554 20.2281 4.04639L20.1704 4.17139L16.1177 12.2769L20.1704 20.3823C20.8353 21.7121 19.8681 23.2769 18.3814 23.2769H8.67629C7.90979 23.2766 7.21526 22.839 6.88137 22.1587L6.81985 22.02L3.21926 13.02C3.0286 12.5433 3.0286 12.0104 3.21926 11.5337L6.81985 2.53369L6.88137 2.39502C7.21526 1.71473 7.90979 1.27714 8.67629 1.27686H18.3814ZM8.67629 21.2769H18.3814L17.3814 19.2769H7.87649L8.67629 21.2769ZM7.07668 17.2769H16.3814L14.3814 13.2769H5.47707L7.07668 17.2769ZM5.47707 11.2769H14.3814L18.3814 3.27686H8.67629L5.47707 11.2769Z",
    fill: "#000"
  }));
});
PhoneFlip.displayName = 'PhoneFlip';
export { PhoneFlip };