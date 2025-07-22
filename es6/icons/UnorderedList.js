function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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