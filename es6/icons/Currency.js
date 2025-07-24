function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Currency = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Currency"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 7C13.2136 7 14.2359 7.65821 14.9209 8.57129C15.6056 9.48426 16 10.7 16 12C16 13.3 15.6056 14.5157 14.9209 15.4287C14.2359 16.3418 13.2136 17 12 17C10.7864 17 9.76406 16.3418 9.0791 15.4287C8.39437 14.5157 8 13.3 8 12C8 10.7 8.39437 9.48426 9.0791 8.57129C9.76406 7.65821 10.7864 7 12 7ZM12 9C11.5569 9 11.0795 9.2371 10.6787 9.77148C10.2777 10.3062 10 11.0909 10 12C10 12.9091 10.2777 13.6938 10.6787 14.2285C11.0795 14.7629 11.5569 15 12 15C12.4431 15 12.9205 14.7629 13.3213 14.2285C13.7223 13.6938 14 12.9091 14 12C14 11.0909 13.7223 10.3062 13.3213 9.77148C12.9205 9.2371 12.4431 9 12 9Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23 21H1V3H23V21ZM3 19H5C5 17.8954 4.10457 17 3 17V19ZM7 5C7 7.20914 5.20914 9 3 9V15C5.20914 15 7 16.7909 7 19H17C17 16.7909 18.7909 15 21 15V9C18.7909 9 17 7.20914 17 5H7ZM21 17C19.8954 17 19 17.8954 19 19H21V17ZM3 7C4.10457 7 5 6.10457 5 5H3V7ZM19 5C19 6.10457 19.8954 7 21 7V5H19Z",
    fill: "#000"
  }));
});
Currency.displayName = 'Currency';
export { Currency };