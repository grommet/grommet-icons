function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Mail = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mail"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6ZM23 18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5146 8.85742L13.5439 14.2402C12.5939 14.8103 11.4061 14.8103 10.4561 14.2402L1.48535 8.85742L2.51465 7.14258L11.4854 12.5254C11.802 12.7154 12.198 12.7154 12.5146 12.5254L21.4854 7.14258L22.5146 8.85742Z",
    fill: "#000"
  }));
});
Mail.displayName = 'Mail';
export { Mail };