function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var BusinessService = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "BusinessService"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 1C15.6569 1 17 2.34315 17 4V5H18C20.7614 5 23 7.23858 23 10V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V10C1 7.23858 3.23858 5 6 5H7V4C7 2.34315 8.34315 1 10 1H14ZM21 16.6631C20.5454 16.8791 20.0368 17 19.5 17H17V18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V17H9V18C9 18.5523 8.55228 19 8 19C7.44772 19 7 18.5523 7 18V17H4.5C3.96319 17 3.45464 16.8791 3 16.6631V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V16.6631ZM6 7C4.34315 7 3 8.34315 3 10V13.5C3 14.3284 3.67157 15 4.5 15H7C7 14.4477 7.44772 14 8 14C8.55228 14 9 14.4477 9 15H15C15 14.4477 15.4477 14 16 14C16.5523 14 17 14.4477 17 15H19.5C20.3284 15 21 14.3284 21 13.5V10C21 8.34315 19.6569 7 18 7H6ZM10 3C9.44772 3 9 3.44772 9 4V5H15V4C15 3.44772 14.5523 3 14 3H10Z",
    fill: "#000"
  }));
});
BusinessService.displayName = 'BusinessService';
export { BusinessService };