function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Rss = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Rss"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 17C5.65685 17 7 18.3431 7 20C7 21.6569 5.65685 23 4 23C2.34315 23 1 21.6569 1 20C1 18.3431 2.34315 17 4 17ZM4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20C5 19.4477 4.55228 19 4 19Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11C8.52285 11 13 15.4772 13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21C11 16.5817 7.41828 13 3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6C11.2843 6 18 12.7157 18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 13.8203 10.1797 8 3 8C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 1C14.0457 1 23 9.9543 23 21C23 21.5523 22.5523 22 22 22C21.4477 22 21 21.5523 21 21C21 11.0589 12.9411 3 3 3C2.44772 3 2 2.55228 2 2C2 1.44772 2.44772 1 3 1Z",
    fill: "#000"
  }));
});
Rss.displayName = 'Rss';
export { Rss };