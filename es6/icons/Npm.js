function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Npm = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Npm"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#D40001",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFF",
    d: "M16.718 7.928h-4.513V20.25H4V3h16v17.249h-3.282V7.93z"
  })));
});
Npm.displayName = 'Npm';
export { Npm };