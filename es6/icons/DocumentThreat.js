function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentThreat = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentThreat"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M9 23a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12V9c0-1 0-2 2-2s2 1 2 2 0 2 2 2h2m-9 0h2v2H8v-2z"
  }));
});
DocumentThreat.displayName = 'DocumentThreat';
export { DocumentThreat };