function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Mouse = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mouse"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 1C17.7614 1 20 3.23858 20 6V15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15V6C4 3.23858 6.23858 1 9 1H15ZM6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V11H6V15ZM9 3C7.34315 3 6 4.34315 6 6V9H11V3H9ZM13 9H18V6C18 4.34315 16.6569 3 15 3H13V9Z",
    fill: "#000"
  }));
});
Mouse.displayName = 'Mouse';
export { Mouse };