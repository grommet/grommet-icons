function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Turbolinux = function Turbolinux(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Turbolinux"
  }, props), React.createElement("path", {
    fill: "#528DC4",
    fillRule: "evenodd",
    d: "M9.41886316,6.22224 L9.96581053,7.45268211 L6.61541053,7.45268211 L6,6.22224 L9.41886316,6.22224 Z M13.1110105,12.1706526 L7.09383158,0 L14.1364421,4.17056842 L14.5465895,6.15397895 L17.8971158,6.15397895 L17.1449053,8.20509474 L14.9569895,8.20509474 L16.7346316,16.4785263 L12.5636842,14.4267789 L14.6833895,24 L8.18785263,10.8034105 L13.1110105,12.1706526 Z"
  }));
};