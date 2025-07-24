function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var TableSearch = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "TableSearch"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V11C23 11.5523 22.5523 12 22 12C21.4477 12 21 11.5523 21 11V8H13V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V8H8V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 18.5523 6 18V8H3V18C3 19.6569 4.34315 21 6 21H9.5C10.0523 21 10.5 21.4477 10.5 22C10.5 22.5523 10.0523 23 9.5 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.39489 3 3.08421 4.26055 3.00391 5.8457L3 6H21C21 4.34315 19.6569 3 18 3H6Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 13C21.2091 13 23 14.7909 23 17C23 19.2091 21.2091 21 19 21C18.258 21 17.5634 20.7974 16.9678 20.4453L14.707 22.707C14.3165 23.0976 13.6835 23.0976 13.293 22.707C12.9024 22.3165 12.9024 21.6835 13.293 21.293L15.5537 19.0312C15.202 18.4359 15 17.7416 15 17C15 14.7909 16.7909 13 19 13ZM19 15C17.8954 15 17 15.8954 17 17C17 18.1046 17.8954 19 19 19C20.1046 19 21 18.1046 21 17C21 15.8954 20.1046 15 19 15Z",
    fill: "#000"
  }));
});
TableSearch.displayName = 'TableSearch';
export { TableSearch };