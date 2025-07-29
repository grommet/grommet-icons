function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var LocationPin = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LocationPin"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C14.7614 1 17 3.23858 17 6C17 8.41892 15.2822 10.4361 13 10.8994V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V10.8994C8.71781 10.4361 7 8.41892 7 6C7 3.23858 9.23858 1 12 1ZM12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3Z",
    fill: "#000"
  }));
});
LocationPin.displayName = 'LocationPin';
export { LocationPin };