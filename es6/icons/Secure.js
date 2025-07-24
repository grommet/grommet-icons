function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Secure = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Secure"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 12.4536C13.1046 12.4536 14 13.349 14 14.4536C14 15.1934 13.5971 15.8371 13 16.1831V17.9536C13 18.5059 12.5523 18.9536 12 18.9536C11.4477 18.9536 11 18.5059 11 17.9536V16.1831C10.4029 15.8371 10 15.1934 10 14.4536C10 13.349 10.8954 12.4536 12 12.4536Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.45361C13.6691 1.45361 15.1572 1.8987 16.25 2.77295C17.3619 3.6626 18 4.94979 18 6.45361V10.1646C19.244 11.5746 20 13.4254 20 15.4536C20 19.8719 16.4183 23.4536 12 23.4536C7.58172 23.4536 4 19.8719 4 15.4536C4 13.4254 4.75604 11.5746 6 10.1646V6.45361C6 4.94979 6.6381 3.6626 7.75 2.77295C8.84282 1.8987 10.3309 1.45361 12 1.45361ZM12 9.45361C8.68629 9.45361 6 12.1399 6 15.4536C6 18.7673 8.68629 21.4536 12 21.4536C15.3137 21.4536 18 18.7673 18 15.4536C18 12.1399 15.3137 9.45361 12 9.45361ZM12 3.45361C10.6692 3.45361 9.65719 3.80881 9 4.33447C8.36208 4.84481 8 5.55757 8 6.45361V8.52588C9.17689 7.84489 10.5425 7.45361 12 7.45361C13.4575 7.45361 14.8231 7.84489 16 8.52588V6.45361C16 5.55757 15.6379 4.84481 15 4.33447C14.3428 3.80881 13.3308 3.45361 12 3.45361Z",
    fill: "#000"
  }));
});
Secure.displayName = 'Secure';
export { Secure };