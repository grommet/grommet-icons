function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Deploy = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Deploy"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M23 1s-6.528-.458-9 2c-.023.037-4 4-4 4L5 8l-3 2 8 4 4 8 2-3 1-5s3.963-3.977 4-4c2.458-2.472 2-9 2-9zm-6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 17c-1-1-3-1-4 0s-1 5-1 5 4 0 5-1 1-3 0-4z"
  }));
});
Deploy.displayName = 'Deploy';
export { Deploy };