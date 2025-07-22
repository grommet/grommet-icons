function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var MoreVertical = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "MoreVertical"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 14h-4v-4h4v4zm0-7h-4V3h4v4zm0 14h-4v-4h4v4z"
  }));
});
MoreVertical.displayName = 'MoreVertical';
export { MoreVertical };