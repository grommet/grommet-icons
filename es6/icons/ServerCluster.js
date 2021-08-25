function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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