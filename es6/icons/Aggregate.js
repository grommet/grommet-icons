function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Aggregate = function Aggregate(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Aggregate"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16,9 L9,9 L9,16 L9,16 C9,19.8659932 12.1340068,23 16,23 L16,23 C19.8659932,23 23,19.8659932 23,16 C23,12.1340068 19.8659932,9 16,9 L16,9 Z M8,15 L15,15 L15,8 L15,8 C15,4.13400675 11.8659932,1 8,1 L8,1 C4.13400675,1 1,4.13400675 1,8 C1,11.8659932 4.13400675,15 8,15 L8,15 Z",
    transform: "rotate(180 12 12)"
  }));
};