function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Alarm = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Alarm"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M21 13a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9zM5.5 19.5 2 23l3.5-3.5zm13 0L22 23l-3.5-3.5zM9 4c-.71-1.092-2.118-2-4-2-2.1 0-4 1.9-4 4 0 1.882.908 3.29 2 4m18 0c1.092-.71 2-2.118 2-4 0-2.1-1.9-4-4-4-1.882 0-3.29.908-4 2m-3 4v5l3 3"
  }));
});
Alarm.displayName = 'Alarm';
export { Alarm };