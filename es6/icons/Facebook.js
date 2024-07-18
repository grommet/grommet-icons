function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
import { generatePrefix } from '../utils';
var Facebook = /*#__PURE__*/forwardRef(function (props, ref) {
  var prefix = generatePrefix('Facebook');
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Facebook"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#" + prefix + "-a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#1089FB",
    d: "M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.207 11.852V15.18h-2.97v-3.155h2.97V9.927c0-3.475 1.693-5 4.58-5 1.384 0 2.115.102 2.462.149v2.753h-1.97c-1.226 0-1.655 1.163-1.655 2.473v1.724h3.594l-.488 3.155h-3.106v8.696C19.481 23.083 24 18.075 24 12c0-6.627-5.373-12-12-12Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: prefix + "-a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
});
Facebook.displayName = 'Facebook';
export { Facebook };