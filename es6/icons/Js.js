function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Js = function Js(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Js"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#F1DC50"
  }), React.createElement("path", {
    stroke: "#333",
    strokeWidth: "2",
    d: "M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"
  })));
};