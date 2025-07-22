function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UserAdd = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserAdd"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 24v-5m6 5v-5M1 24v-6c0-4.97 3.134-7 7-7s7 2 7 7v6M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm8 0h8m-4-4v8"
  }));
});
UserAdd.displayName = 'UserAdd';
export { UserAdd };