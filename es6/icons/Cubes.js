function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Cubes = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Cubes"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m6.5 10.5 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6zm-11 12 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6zm5.5 3 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6z"
  }));
});
Cubes.displayName = 'Cubes';
export { Cubes };