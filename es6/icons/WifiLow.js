function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var WifiLow = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WifiLow"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0"
  }), /*#__PURE__*/React.createElement("path", {
    strokeOpacity: ".2",
    d: "M4.929 10.929c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0",
    opacity: ".8"
  })));
});
WifiLow.displayName = 'WifiLow';
export { WifiLow };