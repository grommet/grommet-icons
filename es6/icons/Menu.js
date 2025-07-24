function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Menu = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Menu"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 20C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H2C1.44772 22 1 21.5523 1 21C1 20.4477 1.44772 20 2 20H22Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 11C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H22Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2C22.5523 2 23 2.44772 23 3C23 3.55228 22.5523 4 22 4H2C1.44772 4 1 3.55228 1 3C1 2.44772 1.44772 2 2 2H22Z",
    fill: "#000"
  }));
});
Menu.displayName = 'Menu';
export { Menu };