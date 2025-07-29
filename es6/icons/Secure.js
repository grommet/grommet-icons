function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Secure = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Secure"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 12C13.1046 12 14 12.8954 14 14C14 14.7398 13.5971 15.3835 13 15.7295V17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5V15.7295C10.4029 15.3835 10 14.7398 10 14C10 12.8954 10.8954 12 12 12Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C13.6691 1 15.1572 1.44508 16.25 2.31934C17.3619 3.20899 18 4.49617 18 6V9.71094C19.244 11.121 20 12.9718 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 12.9718 4.75604 11.121 6 9.71094V6C6 4.49617 6.6381 3.20899 7.75 2.31934C8.84282 1.44508 10.3309 1 12 1ZM12 9C8.68629 9 6 11.6863 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 11.6863 15.3137 9 12 9ZM12 3C10.6692 3 9.65719 3.3552 9 3.88086C8.36208 4.3912 8 5.10396 8 6V8.07227C9.17689 7.39127 10.5425 7 12 7C13.4575 7 14.8231 7.39127 16 8.07227V6C16 5.10396 15.6379 4.3912 15 3.88086C14.3428 3.3552 13.3308 3 12 3Z",
    fill: "#000"
  }));
});
Secure.displayName = 'Secure';
export { Secure };