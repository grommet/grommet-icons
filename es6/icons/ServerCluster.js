function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ServerCluster = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ServerCluster"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 8h22V1H1v7zm10-3h1V4h-1v1zm8 0h1V4h-1v1zm-4 0h1V4h-1v1zm-4 7h1v-1h-1v1zm8 0h1v-1h-1v1zm-4 0h1v-1h-1v1zm-4 7h1v-1h-1v1zm8 0h1v-1h-1v1zm-4 0h1v-1h-1v1zM1 15h22V8H1v7zm0 7h22v-7H1v7zm20 1H3"
  }));
});
ServerCluster.displayName = 'ServerCluster';
export { ServerCluster };