function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Terminal = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Terminal"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.0001 19.0003C21.5523 19.0003 22.0001 19.448 22.0001 20.0003C21.9999 20.5523 21.5522 21.0002 21.0001 21.0003H8.00012C7.44799 21.0003 7.00037 20.5523 7.00012 20.0003C7.00012 19.448 7.44783 19.0003 8.00012 19.0003H21.0001Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.29309 3.29322C2.6592 2.92711 3.2382 2.90451 3.63098 3.22486L3.70715 3.29322L9.70715 9.29322C10.0974 9.68377 10.0976 10.3169 9.70715 10.7073L3.70715 16.7073C3.31671 17.0975 2.68358 17.0974 2.29309 16.7073C1.90262 16.3168 1.90272 15.6838 2.29309 15.2932L7.58606 10.0003L2.29309 4.70729L2.22473 4.63111C1.90442 4.2384 1.92713 3.65935 2.29309 3.29322Z",
    fill: "#000"
  }));
});
Terminal.displayName = 'Terminal';
export { Terminal };