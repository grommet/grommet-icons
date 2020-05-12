function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Map = function Map(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Map"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M15,15 L19,15 L22,22 L2,22 L5,15 L9,15 M13,8 C13,8.5525 12.5525,9 12,9 C11.4475,9 11,8.5525 11,8 C11,7.4475 11.4475,7 12,7 C12.5525,7 13,7.4475 13,8 M6,8 C6,13 12,18 12,18 C12,18 18,13 18,8 C18,4.58317221 15.3135725,2 12,2 C8.68642746,2 6,4.58317221 6,8 Z"
  }));
};