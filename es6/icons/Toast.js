function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Toast = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Toast"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 2a4 4 0 0 0-2 7.465V16h12V9.465A4 4 0 0 0 16 2H8zm3.321 4.874a1.004 1.004 0 0 1 1.38-.37l1.715.991c.483.279.652.889.37 1.38l-.991 1.715a1.004 1.004 0 0 1-1.38.37L10.7 9.968a1.004 1.004 0 0 1-.37-1.379l.991-1.716zM8 18v2m4-2v5m4-5v3"
  }));
});
Toast.displayName = 'Toast';
export { Toast };