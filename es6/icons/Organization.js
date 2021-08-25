function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Organization = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Organization"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 3v20H4V3h16zM8.042 9h2V7h-2v2zM14 9h2V7h-2v2zm-5.958 6h2v-2h-2v2zm2 8h4v-4h-4v4zM14 15h2v-2h-2v2zM2 3h20V1H2v2z"
  }));
});
Organization.displayName = 'Organization';
export { Organization };