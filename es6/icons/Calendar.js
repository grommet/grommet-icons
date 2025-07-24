function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Calendar = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Calendar"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 0C16.5523 0 17 0.447715 17 1H18C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H7C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1H15C15 0.447715 15.4477 0 16 0ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H17V4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4V3H9V4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4V3H6Z",
    fill: "#000"
  }));
});
Calendar.displayName = 'Calendar';
export { Calendar };