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
    d: "M12 1.70996C14.7614 1.70996 17 3.94854 17 6.70996C17 9.12888 15.2822 11.1461 13 11.6094V22.71C13 23.2622 12.5523 23.71 12 23.71C11.4477 23.71 11 23.2622 11 22.71V11.6094C8.71781 11.1461 7 9.12888 7 6.70996C7 3.94854 9.23858 1.70996 12 1.70996ZM12 3.70996C10.3431 3.70996 9 5.05311 9 6.70996C9 8.36682 10.3431 9.70996 12 9.70996C13.6569 9.70996 15 8.36682 15 6.70996C15 5.05311 13.6569 3.70996 12 3.70996Z",
    fill: "#000"
  }));
});
LocationPin.displayName = 'LocationPin';
export { LocationPin };