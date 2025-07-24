function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var VirtualMachine = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "VirtualMachine"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1.27686C21.6569 1.27686 23 2.62 23 4.27686V15.2769C23 16.9337 21.6569 18.2769 20 18.2769H18V20.2769C18 21.9337 16.6569 23.2769 15 23.2769H4C2.34315 23.2769 1 21.9337 1 20.2769V9.27686C1 7.62 2.34315 6.27686 4 6.27686H6V4.27686C6 2.62 7.34315 1.27686 9 1.27686H20ZM4 8.27686C3.44772 8.27686 3 8.72457 3 9.27686V20.2769C3 20.8291 3.44772 21.2769 4 21.2769H15C15.5523 21.2769 16 20.8291 16 20.2769V18.2769H9C7.34315 18.2769 6 16.9337 6 15.2769V8.27686H4ZM8 15.2769C8 15.8291 8.44772 16.2769 9 16.2769H16V9.27686C16 8.72457 15.5523 8.27686 15 8.27686H8V15.2769ZM9 3.27686C8.44772 3.27686 8 3.72457 8 4.27686V6.27686H15C16.6569 6.27686 18 7.62 18 9.27686V16.2769H20C20.5523 16.2769 21 15.8291 21 15.2769V4.27686C21 3.72457 20.5523 3.27686 20 3.27686H9Z",
    fill: "#000"
  }));
});
VirtualMachine.displayName = 'VirtualMachine';
export { VirtualMachine };