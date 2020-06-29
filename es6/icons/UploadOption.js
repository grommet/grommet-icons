function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var UploadOption = function UploadOption(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UploadOption"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 5.58579L12.7071 6.29289L17.7071 11.2929L16.2929 12.7071L13 9.41421V18H11V9.41421L7.70711 12.7071L6.29289 11.2929L11.2929 6.29289L12 5.58579Z",
    fill: "#000"
  }));
};