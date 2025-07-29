function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Tumblr = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Tumblr"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.639 19.17C17.1927 19.3822 16.3392 19.5682 15.7025 19.5847C13.7817 19.6357 13.409 18.2355 13.3925 17.2185V9.74773H18.212V6.11399H13.4105V0H9.89449C9.83674 0 9.73624 0.0509999 9.72199 0.18C9.51649 2.05125 8.64049 5.33474 5 6.64724V9.74773H7.4285V17.589C7.4285 20.274 9.40924 24.0877 14.6375 23.9985C16.4015 23.9677 18.3597 23.2297 18.7932 22.593L17.639 19.17Z",
    fill: "#35465C"
  }));
});
Tumblr.displayName = 'Tumblr';
export { Tumblr };