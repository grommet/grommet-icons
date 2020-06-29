function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Mouse = function Mouse(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Mouse"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V11V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V11V9ZM8 11V15C8 17.2091 9.79086 19 12 19C14.2091 19 16 17.2091 16 15V11H8ZM16 9C16 7.13616 14.7252 5.57006 13 5.12602V9H16ZM11 9H8C8 7.13616 9.27477 5.57006 11 5.12602V9Z",
    fill: "#000"
  }));
};