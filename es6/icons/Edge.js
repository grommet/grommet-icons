function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Edge = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Edge"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#00A1F1",
    fillRule: "evenodd",
    d: "M5.487 6.357C2.632 8.134 1 10.66 1 10.66s.423-5.296 4.487-8.395C7.103 1.033 9.313 0 12.285 0c1.117 0 3.459.195 5.568 1.495 2.109 1.3 2.961 2.39 3.911 3.984.41.688.744 1.572.952 2.425.391 1.598.438 3.508.438 3.508v2.517H8.081s-.368 5.065 6.564 5.065c2.411 0 3.255-.38 4.048-.614 1.241-.367 2.44-1.187 2.44-1.187l.002 5.06S18.298 24 14.012 24c-1.207 0-2.479-.101-3.706-.5-1.072-.347-3.316-1.285-4.819-3.483-.531-.778-1.107-1.813-1.393-2.824-.308-1.093-.304-2.155-.304-2.74 0-2.188.747-4.277 2.044-5.787C7.515 6.71 9.638 5.848 9.638 5.848s-.691.807-1.117 1.81a8.288 8.288 0 0 0-.542 2.015h8.511s.498-5.086-4.815-5.086c-2.003 0-4.462.695-6.188 1.77"
  }));
});
Edge.displayName = 'Edge';
export { Edge };