function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Compliance = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Compliance"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.293 10.293C16.6835 9.90244 17.3165 9.90244 17.707 10.293C18.0976 10.6835 18.0976 11.3165 17.707 11.707L11.707 17.707C11.3165 18.0976 10.6835 18.0976 10.293 17.707L7.29297 14.707C6.90244 14.3165 6.90244 13.6835 7.29297 13.293C7.68349 12.9024 8.31651 12.9024 8.70703 13.293L11 15.5859L16.293 10.293Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM18.8701 3.12891C18.9537 3.40471 19 3.6969 19 4C19 5.65685 17.6569 7 16 7H8C6.34315 7 5 5.65685 5 4C5 3.697 5.04536 3.40463 5.12891 3.12891C3.89694 3.50219 3 4.64615 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.64582 20.1025 3.50191 18.8701 3.12891ZM8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5H16C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3H15.9131C15.707 3.58234 15.1529 4 14.5 4H9.5C8.84707 4 8.29297 3.58234 8.08691 3H8Z",
    fill: "#000"
  }));
});
Compliance.displayName = 'Compliance';
export { Compliance };