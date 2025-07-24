function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Multimedia = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Multimedia"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.47461 5.14941C9.76939 4.96733 10.1374 4.95051 10.4473 5.10547L15.4473 7.60547C15.786 7.77486 16 8.12123 16 8.5C16 8.87877 15.786 9.22514 15.4473 9.39453L10.4473 11.8945C10.1374 12.0495 9.76939 12.0327 9.47461 11.8506C9.17979 11.6684 9 11.3466 9 11V6C9 5.65342 9.17979 5.33162 9.47461 5.14941Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V16C23 17.6569 21.6569 19 20 19H16.5967L16.9307 21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H7C6.44772 23 6 22.5523 6 22C6 21.4477 6.44772 21 7 21H7.06934L7.40332 19H4C2.34315 19 1 17.6569 1 16V4C1 2.34315 2.34315 1 4 1H20ZM9.09668 21H14.9033L14.5693 19H9.43066L9.09668 21ZM3 16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V15H3V16ZM4 3C3.44772 3 3 3.44772 3 4V13H21V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }));
});
Multimedia.displayName = 'Multimedia';
export { Multimedia };