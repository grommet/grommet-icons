function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var FlagFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FlagFill"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 24V2c8-3.524 11 4.644 20 0v12c-8 4.895-13-4.103-20 0"
  }));
});
FlagFill.displayName = 'FlagFill';
export { FlagFill };