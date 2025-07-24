function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var AidOption = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "AidOption"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6ZM23 18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18C20.7614 1 23 3.23858 23 6V18Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 17.9004C13.9998 18.5076 13.5076 18.9998 12.9004 19H11.0996C10.4924 18.9998 10.0002 18.5076 10 17.9004V6.09961C10.0002 5.49241 10.4924 5.00021 11.0996 5H12.9004C13.5076 5.00021 13.9998 5.49241 14 6.09961V17.9004Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12.9004C18.9998 13.5076 18.5076 13.9998 17.9004 14H6.09961C5.49241 13.9998 5.00021 13.5076 5 12.9004V11.0996C5.00021 10.4924 5.49241 10.0002 6.09961 10H17.9004C18.5076 10.0002 18.9998 10.4924 19 11.0996V12.9004Z",
    fill: "#000"
  }));
});
AidOption.displayName = 'AidOption';
export { AidOption };