function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Microphone = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Microphone"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 8C20.5523 8 21 8.44772 21 9V11C21 13.7512 20.0079 16.0207 18.3457 17.5996C16.9203 18.9534 15.0481 19.7539 13 19.9502V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19.9502C8.95187 19.7539 7.07965 18.9534 5.6543 17.5996C3.99208 16.0207 3 13.7512 3 11V9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V11C5 13.2486 5.79922 14.9793 7.03223 16.1504C8.27315 17.3287 10.017 18 12 18C13.983 18 15.7268 17.3287 16.9678 16.1504C18.2008 14.9793 19 13.2486 19 11V9C19 8.44772 19.4477 8 20 8Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C13.2207 1 14.482 1.25286 15.4541 2.03223C16.4667 2.84408 16.9999 4.09158 17 5.71387V11.2861C16.9999 12.9084 16.4667 14.1559 15.4541 14.9678C14.482 15.7471 13.2207 16 12 16C10.7793 16 9.51798 15.7471 8.5459 14.9678C7.53334 14.1559 7.00009 12.9084 7 11.2861V5.71387C7.00009 4.09158 7.53334 2.84408 8.5459 2.03223C9.51798 1.25286 10.7793 1 12 1ZM12 3C11.0116 3 10.2725 3.21143 9.79688 3.59277C9.36197 3.94154 9.00009 4.5511 9 5.71387V11.2861C9.00009 12.4489 9.36197 13.0585 9.79688 13.4072C10.2725 13.7886 11.0116 14 12 14C12.9884 14 13.7275 13.7886 14.2031 13.4072C14.638 13.0585 14.9999 12.4489 15 11.2861V5.71387C14.9999 4.5511 14.638 3.94154 14.2031 3.59277C13.7275 3.21143 12.9884 3 12 3Z",
    fill: "#000"
  }));
});
Microphone.displayName = 'Microphone';
export { Microphone };