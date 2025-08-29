function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ListUnordered = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ListUnordered"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H7C6.44772 19 6 18.5523 6 18C6 17.4477 6.44772 17 7 17H21ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H21ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H21Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 16.5C4.32843 16.5 5 17.1716 5 18C5 18.8284 4.32843 19.5 3.5 19.5C2.67157 19.5 2 18.8284 2 18C2 17.1716 2.67157 16.5 3.5 16.5Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 10.5C4.32843 10.5 5 11.1716 5 12C5 12.8284 4.32843 13.5 3.5 13.5C2.67157 13.5 2 12.8284 2 12C2 11.1716 2.67157 10.5 3.5 10.5Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 4.5C4.32843 4.5 5 5.17157 5 6C5 6.82843 4.32843 7.5 3.5 7.5C2.67157 7.5 2 6.82843 2 6C2 5.17157 2.67157 4.5 3.5 4.5Z",
    fill: "#000"
  }));
});
ListUnordered.displayName = 'ListUnordered';
export { ListUnordered };