function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Docker = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Docker"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#0DB7ED",
    fillRule: "evenodd",
    d: "M6.942 14.9c.056 0 .11.01.158.03a.179.179 0 1 0 .246.24.438.438 0 1 1-.404-.27zm0 1.185a.749.749 0 1 1 .002-1.497.749.749 0 0 1-.002 1.497zm13.444-4.901c-2.124 5.628-6.92 8.135-12.576 8.135-2.672 0-4.803-.92-6.167-2.452l.01-.006c.393.02.745.026 1.101.026.327 0 .646-.003.941-.02l.084-.006s.091-.006.046-.007a8.545 8.545 0 0 0 1.877-.306 4.82 4.82 0 0 0 .286-.09.197.197 0 0 0-.128-.371c-.69.239-1.6.37-2.715.395a21.668 21.668 0 0 1-1.86-.045 6.3 6.3 0 0 1-.386-.58l-.187-.34C.15 14.411-.096 13.12.034 11.716h16.363c1.344 0 2.656-.502 3.28-1.055-1.117-.908-1.006-3.064-.295-3.886.618.496 1.613 1.54 1.442 2.871.777-.39 2.127-.583 3.176.022-.659 1.286-2.107 1.67-3.614 1.516zm-18.13.135h2.212V9.106H2.255v2.213zm2.552 0h2.213V9.106H4.808v2.213zm0-2.553h2.213V6.553H4.808v2.213zm2.553 2.553h2.213V9.106H7.361v2.213zm0-2.553h2.213V6.553H7.361v2.213zm2.553 2.553h2.213V9.106H9.914v2.213zm0-2.553h2.213V6.553H9.914v2.213zm0-2.553h2.213V4H9.914v2.213zm2.553 5.106h2.213V9.106h-2.213v2.213z"
  }));
});
Docker.displayName = 'Docker';
export { Docker };