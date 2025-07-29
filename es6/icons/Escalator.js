function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Escalator = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Escalator"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.5 6C21.433 6 23 7.567 23 9.5C23 11.433 21.433 13 19.5 13H19.1719C18.6871 13 18.2218 13.1924 17.8789 13.5352L9.87891 21.5352C8.94123 22.4728 7.66886 23 6.34277 23H4.5C2.567 23 1 21.433 1 19.5C1 17.567 2.567 16 4.5 16H4.82812C5.25826 16 5.67252 15.8478 6 15.5742V12.5C6 11.6716 6.67157 11 7.5 11C8.32843 11 9 11.6716 9 12.5V12.5859L11 10.5859V7.5C11 6.67157 11.6716 6 12.5 6C13.3284 6 14 6.67157 14 7.5V7.58594L14.1211 7.46484C15.0588 6.52716 16.3311 6 17.6572 6H19.5ZM17.6572 8C16.8616 8 16.0978 8.3163 15.5352 8.87891L7.53516 16.8789C6.81722 17.5967 5.84334 18 4.82812 18H4.5C3.67157 18 3 18.6716 3 19.5C3 20.3284 3.67157 21 4.5 21H6.34277C7.13842 21 7.90223 20.6837 8.46484 20.1211L16.4648 12.1211C17.1828 11.4033 18.1567 11 19.1719 11H19.5C20.3284 11 21 10.3284 21 9.5C21 8.67157 20.3284 8 19.5 8H17.6572Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 6C8.60457 6 9.5 6.89543 9.5 8C9.5 9.10457 8.60457 10 7.5 10C6.39543 10 5.5 9.10457 5.5 8C5.5 6.89543 6.39543 6 7.5 6Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 1C13.6046 1 14.5 1.89543 14.5 3C14.5 4.10457 13.6046 5 12.5 5C11.3954 5 10.5 4.10457 10.5 3C10.5 1.89543 11.3954 1 12.5 1Z",
    fill: "#000"
  }));
});
Escalator.displayName = 'Escalator';
export { Escalator };