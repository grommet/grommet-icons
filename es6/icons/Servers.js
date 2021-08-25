function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Servers = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Servers"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 19h1v-1H7v1zm11 0h1v-1h-1v1zM1 23h11V1H1v22zm11 0h11V1H12v22zM4 5h5-5zm11 0h5-5zM4 9h5-5zm11 0h5-5zM4 13h5-5zm11 0h5-5z"
  }));
});
Servers.displayName = 'Servers';
export { Servers };