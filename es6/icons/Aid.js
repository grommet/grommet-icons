function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Aid = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Aid"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 10C12.5523 10 13 10.4477 13 11V13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15H9C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H11V11C11 10.4477 11.4477 10 12 10Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 1C15.6569 1 17 2.34315 17 4V5H18C20.7614 5 23 7.23858 23 10V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V10C1 7.23858 3.23858 5 6 5H7V4C7 2.34315 8.34315 1 10 1H14ZM6 7C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H6ZM10 3C9.44772 3 9 3.44772 9 4V5H15V4C15 3.44772 14.5523 3 14 3H10Z",
    fill: "#000"
  }));
});
Aid.displayName = 'Aid';
export { Aid };