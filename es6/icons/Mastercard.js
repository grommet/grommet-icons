function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Mastercard = function Mastercard(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Mastercard"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "12",
    r: "7",
    fill: "#EA001B"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "12",
    r: "7",
    fill: "#FFA200",
    fillOpacity: ".8"
  })));
};