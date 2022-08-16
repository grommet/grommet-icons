function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusDisabledSmall = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 12 12",
    a11yTitle: "Status is disabled"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "10",
    height: "10",
    x: "1",
    y: "1",
    fillRule: "evenodd",
    stroke: "#000",
    rx: "1"
  }));
});
StatusDisabledSmall.displayName = 'StatusDisabledSmall';
export { StatusDisabledSmall };