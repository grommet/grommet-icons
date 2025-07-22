function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Beacon = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Beacon"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v11M7.05 4.05A6.978 6.978 0 0 0 5 9c0 1.933.784 3.683 2.05 4.95m9.9 0A6.978 6.978 0 0 0 19 9a6.978 6.978 0 0 0-2.05-4.95M4.222 1.222A10.966 10.966 0 0 0 1 9c0 3.037 1.231 5.787 3.222 7.778m15.556 0A10.966 10.966 0 0 0 23 9c0-3.038-1.231-5.788-3.222-7.778"
  }));
});
Beacon.displayName = 'Beacon';
export { Beacon };