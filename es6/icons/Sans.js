function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Sans = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Sans"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    fill: "none",
    d: "M1 12h22M2 22h20a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zM5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
});
Sans.displayName = 'Sans';
export { Sans };