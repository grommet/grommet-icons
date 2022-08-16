function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Sd = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Sd"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 2a2 2 0 0 1 2-2h13a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 22 5v17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm14.586 0H4v20h16V5.414L16.586 2zM5 7V3h2v4H5zm3-4v4h2V3H8zm3 4V3h2v4h-2zm3-2v2h2V5h-2z",
    fill: "#000"
  }));
});
Sd.displayName = 'Sd';
export { Sd };