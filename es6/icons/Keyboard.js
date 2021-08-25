function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Keyboard = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Keyboard"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 7a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7zm-2 0v10H2V7h20zM3 10h3V8H3v2zm2 3H3v-2h2v2zm-2 3h1v-2H3v2zm14-2v2H7v-2h10zm1 2h1v-2h-1v2zm3 0h-1v-2h1v2zm-3-3h3v-2h-3v2zm3-3h-2V8h2v2zm-5 0h2V8h-2v2zm-7 0H7V8h2v2zm1 0h2V8h-2v2zm5 0h-2V8h2v2zM5 16h1v-2H5v2zm3-3H6v-2h2v2zm1 0h2v-2H9v2zm5 0h-2v-2h2v2zm1 0h2v-2h-2v2z",
    fill: "#000"
  }));
});
Keyboard.displayName = 'Keyboard';
export { Keyboard };