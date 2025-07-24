function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Mode = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mode"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.55566C14.4546 7.55566 16.4443 9.5454 16.4443 12C16.4443 14.4546 14.4546 16.4443 12 16.4443V22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V7.55566Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.55566C9.5454 7.55566 7.55566 9.5454 7.55566 12C7.55566 14.4546 9.5454 16.4443 12 16.4443V7.55566Z",
    fill: "#000"
  }));
});
Mode.displayName = 'Mode';
export { Mode };