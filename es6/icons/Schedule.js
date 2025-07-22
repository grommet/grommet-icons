function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Schedule = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Schedule"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 23h22V4H1v19zM18 4V0v4zM6 4V0v4zM1 8.5h22H1zM6 14c.556-1.333 1.39-2 2.5-2 1.3 0 2 1 2 2s-1 2-2 3l-2 2v.5h5.405m5.08 1L17 12h-.5c-.5 1.5-2 2-2.743 2"
  }));
});
Schedule.displayName = 'Schedule';
export { Schedule };