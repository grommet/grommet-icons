function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Beacon = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Beacon"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.515.515A11.966 11.966 0 0 0 0 9c0 3.313 1.344 6.315 3.515 8.485l1.414-1.414A9.966 9.966 0 0 1 2 9a9.966 9.966 0 0 1 2.929-7.071L3.515.515zm2.828 2.828A7.978 7.978 0 0 0 4 9c0 2.209.897 4.21 2.343 5.657l1.414-1.414A5.978 5.978 0 0 1 6 9c0-1.657.67-3.156 1.757-4.243L6.343 3.343zM12 5a4 4 0 0 0-1 7.874V23h2V12.874A4.002 4.002 0 0 0 12 5zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7.657-5.657A7.978 7.978 0 0 1 20 9c0 2.209-.897 4.21-2.343 5.657l-1.414-1.414A5.978 5.978 0 0 0 18 9c0-1.657-.67-3.156-1.757-4.243l1.414-1.414zM20.485.515A11.965 11.965 0 0 1 24 9c0 3.313-1.344 6.315-3.515 8.485l-1.414-1.414A9.966 9.966 0 0 0 22 9a9.966 9.966 0 0 0-2.929-7.071L20.485.515z",
    fill: "#000"
  }));
});
Beacon.displayName = 'Beacon';
export { Beacon };