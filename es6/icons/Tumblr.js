function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Tumblr = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Tumblr"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#35465C",
    fillRule: "evenodd",
    d: "M17.639 19.17c-.446.212-1.3.398-1.937.415-1.92.05-2.293-1.35-2.31-2.367v-7.47h4.82V6.114H13.41V0H9.894c-.057 0-.158.051-.172.18C9.516 2.051 8.64 5.335 5 6.647v3.1h2.428v7.842c0 2.685 1.981 6.499 7.21 6.41 1.763-.031 3.722-.77 4.155-1.406L17.64 19.17z"
  }));
});
Tumblr.displayName = 'Tumblr';
export { Tumblr };