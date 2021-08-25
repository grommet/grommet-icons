function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentCloud = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentCloud"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-4M18 1v5h5m-12 7H6.002A3.003 3.003 0 0 0 3 16c0 1.657 1.343 3 2.99 3H7v1.01A2.993 2.993 0 0 0 10.002 23h1.996A2.999 2.999 0 0 0 15 20.01V19m-4 0h4.998A3.003 3.003 0 0 0 19 16c0-1.657-1.343-3-2.99-3H15v-1.01A2.993 2.993 0 0 0 11.998 9h-1.996A2.999 2.999 0 0 0 7 11.99V13"
  }));
});
DocumentCloud.displayName = 'DocumentCloud';
export { DocumentCloud };