function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Trash = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Trash"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 8C9.55228 8 10 8.44772 10 9V17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17V9C8 8.44772 8.44772 8 9 8Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 8C15.5523 8 16 8.44772 16 9V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V9C14 8.44772 14.4477 8 15 8Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 1C15.1046 1 16 1.89543 16 3V4H22C22.5523 4 23 4.44772 23 5C23 5.55228 22.5523 6 22 6H21V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V6H2C1.44772 6 1 5.55228 1 5C1 4.44772 1.44772 4 2 4H7V3C7 1.89543 7.89543 1 9 1H14ZM5 20C5 20.5523 5.44771 21 6 21H18C18.5523 21 19 20.5523 19 20V6H5V20ZM9 4H14V3H9V4Z",
    fill: "#000"
  }));
});
Trash.displayName = 'Trash';
export { Trash };