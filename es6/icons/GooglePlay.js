function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var GooglePlay = function GooglePlay(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlay"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("polygon", {
    stroke: "#444",
    strokeLinejoin: "round",
    strokeWidth: "2",
    points: "3 2 3 22 21 12"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#444",
    strokeWidth: "2",
    d: "M3,2 L14,16"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#444",
    strokeWidth: "2",
    d: "M3,8 L14,22",
    transform: "matrix(1 0 0 -1 0 30)"
  })));
};