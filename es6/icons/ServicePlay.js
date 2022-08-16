function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var ServicePlay = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ServicePlay"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12zm7.995 3.657a6 6 0 1 0-1.89-10.22m-8.281 6.255A6 6 0 0 0 9 23a6 6 0 0 0 2.127-11.612M6.5 6 8 7 6.5 8V6z"
  }));
});
ServicePlay.displayName = 'ServicePlay';
export { ServicePlay };