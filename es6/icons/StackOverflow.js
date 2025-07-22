function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StackOverflow = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StackOverflow"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#BCBBBB",
    d: "M19.127 21.866v-6.43h2.134V24H2v-8.563h2.134v6.43h14.993Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F48023",
    d: "m6.49 14.827 10.475 2.19.444-2.107-10.476-2.19-.443 2.107Zm1.385-4.989 9.7 4.518.887-1.94-9.7-4.545-.887 1.967Zm2.688-4.766 8.231 6.845 1.358-1.635-8.23-6.846-1.359 1.636ZM15.884 0l-1.718 1.275 6.374 8.591 1.719-1.275L15.884 0ZM6.268 19.704h10.697V17.57H6.268v2.134Z"
  }));
});
StackOverflow.displayName = 'StackOverflow';
export { StackOverflow };