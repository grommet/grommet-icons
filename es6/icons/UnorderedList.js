function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UnorderedList = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UnorderedList"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5.94 6.42H24v1.75H5.94zm0 5.29H24v1.75H5.94zm0 5.28H24v1.75H5.94z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "1.85",
    cy: "7.29",
    r: "1.52"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "1.85",
    cy: "12.58",
    r: "1.52"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "1.85",
    cy: "17.87",
    r: "1.52"
  }));
});
UnorderedList.displayName = 'UnorderedList';
export { UnorderedList };