function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DisabledOutline = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DisabledOutline"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 11.4536C17.5523 11.4536 18 11.9013 18 12.4536C18 13.0059 17.5523 13.4536 17 13.4536H7C6.44772 13.4536 6 13.0059 6 12.4536C6 11.9013 6.44772 11.4536 7 11.4536H17Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1.45361C20.7614 1.45361 23 3.69219 23 6.45361V18.4536C23 21.215 20.7614 23.4536 18 23.4536H6C3.23858 23.4536 1 21.215 1 18.4536V6.45361C1 3.69219 3.23858 1.45361 6 1.45361H18ZM6 3.45361C4.34315 3.45361 3 4.79676 3 6.45361V18.4536C3 20.1105 4.34315 21.4536 6 21.4536H18C19.6569 21.4536 21 20.1105 21 18.4536V6.45361C21 4.79676 19.6569 3.45361 18 3.45361H6Z",
    fill: "#000"
  }));
});
DisabledOutline.displayName = 'DisabledOutline';
export { DisabledOutline };