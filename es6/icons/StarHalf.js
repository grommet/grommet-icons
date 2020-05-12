function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var StarHalf = function StarHalf(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StarHalf"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("polygon", {
    fill: "#000",
    fillOpacity: ".2",
    points: "12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: "#FFC95E",
    points: "12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"
  })));
};