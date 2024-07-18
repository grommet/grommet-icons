function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UserWorker = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserWorker"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 6h18H3zm7-4v2m4-2v2m2 8c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 4.5V23m0-10a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-4-1a4 4 0 1 0 8 0"
  }));
});
UserWorker.displayName = 'UserWorker';
export { UserWorker };