function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentOutlook = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentOutlook"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 9V1H17.5L21 4.5V23H2M16 1v5h5M7.75 15.75C7.75 13.5 6.5 12 5 12s-2.75 1.5-2.75 3.75S3.5 19.5 5 19.5s2.75-1.5 2.75-3.75zM5 12c2.425 0 3 2.5 3 3.75s-.5 3.75-3 3.75-3-2.5-3-3.75S2.559 12 5 12z"
  }));
});
DocumentOutlook.displayName = 'DocumentOutlook';
export { DocumentOutlook };