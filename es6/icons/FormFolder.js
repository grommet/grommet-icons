function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var FormFolder = function FormFolder(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormFolder"
  }, props), React.createElement("polygon", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    points: "6 18 6 6 10.8 6 12.6 8.4 18 8.4 18 18"
  }));
};