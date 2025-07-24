function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Lounge = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Lounge"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 8.70996C22.5523 8.70996 23 9.15768 23 9.70996V14.71C23 17.1289 21.2822 19.1461 19 19.6094V22.71C19 23.2622 18.5523 23.71 18 23.71C17.4477 23.71 17 23.2622 17 22.71V19.71H7V22.71C7 23.2622 6.55228 23.71 6 23.71C5.44772 23.71 5 23.2622 5 22.71V19.6094C2.71781 19.1461 1 17.1289 1 14.71V9.70996C1 9.15768 1.44772 8.70996 2 8.70996C2.55228 8.70996 3 9.15768 3 9.70996V14.71C3 16.3668 4.34315 17.71 6 17.71H18C19.6569 17.71 21 16.3668 21 14.71V9.70996C21 9.15768 21.4477 8.70996 22 8.70996Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 1.70996C17.7614 1.70996 20 3.94854 20 6.70996V14.71C20 15.8145 19.1046 16.71 18 16.71H6C4.89543 16.71 4 15.8145 4 14.71V6.70996C4 3.94854 6.23858 1.70996 9 1.70996H15ZM6 14.71H18V13.71H6V14.71ZM9 3.70996C7.34315 3.70996 6 5.05311 6 6.70996V11.71H18V6.70996C18 5.05311 16.6569 3.70996 15 3.70996H9Z",
    fill: "#000"
  }));
});
Lounge.displayName = 'Lounge';
export { Lounge };