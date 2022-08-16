function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Nodes = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Nodes"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
  }));
});
Nodes.displayName = 'Nodes';
export { Nodes };