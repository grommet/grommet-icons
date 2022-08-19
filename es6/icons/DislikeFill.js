function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DislikeFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dislike"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    fillRule: "evenodd",
    d: "M11 24h-.997L10 23.003 11 23l-1 .003v-.261l-.002-.698-.006-2.207a2728.33 2728.33 0 0 1-.008-4.163c0-.42-.155-.83-.454-1.132C9.243 14.251 8.763 14 8 14H1.001L1 13v1H0V0h1v1-1h19c1.154 0 2.203.29 2.957 1.043C23.711 1.797 24 2.846 24 4v9.999L23 14h1v1h-7v5c0 1.154-.29 2.203-1.043 2.957C15.203 23.711 14.154 24 13 24h-2ZM5 12V2H2v10h3Z",
    clipRule: "evenodd"
  }));
});
DislikeFill.displayName = 'DislikeFill';
export { DislikeFill };