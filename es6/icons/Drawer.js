function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Drawer = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Drawer"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.0002 17C15.5523 17.0002 16.0002 17.4478 16.0002 18C16.0002 18.5522 15.5523 18.9998 15.0002 19H9.00016C8.44797 18.9999 8.00016 18.5522 8.00016 18C8.00016 17.4478 8.44797 17.0001 9.00016 17H15.0002Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.3341 1C17.3523 1.00033 19.1731 2.21416 19.9494 4.07715L23.4142 12.3926C23.8277 13.3851 23.9103 14.4852 23.6496 15.5283L22.7277 19.2129C22.1712 21.4385 20.1712 22.9998 17.8771 23H6.12321C3.90059 22.9999 1.95453 21.5342 1.32926 19.4189L1.27262 19.2129L0.351722 15.5283C0.0909006 14.485 0.173508 13.3853 0.587073 12.3926L4.05192 4.07715C4.8283 2.21399 6.64869 1 8.66715 1H15.3341ZM2.29215 15.043L3.21305 18.7275C3.54693 20.0629 4.74675 20.9999 6.12321 21H17.8771C19.2535 20.9998 20.4534 20.0629 20.7873 18.7275L21.7091 15.043C21.7127 15.0288 21.7146 15.0142 21.7179 15H2.28336C2.28668 15.0142 2.28862 15.0288 2.29215 15.043ZM8.66715 3C7.45621 3 6.36353 3.72802 5.89762 4.8457L2.50016 13H21.5002L18.1027 4.8457C17.6369 3.72828 16.5448 3.00032 15.3341 3H8.66715Z",
    fill: "#000"
  }));
});
Drawer.displayName = 'Drawer';
export { Drawer };