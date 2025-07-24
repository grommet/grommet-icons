function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Clear = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Clear"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM4.96875 6.38281C3.73712 7.92249 3 9.87498 3 12C3 16.9706 7.02944 21 12 21C14.125 21 16.0766 20.2619 17.6162 19.0303L4.96875 6.38281ZM12 3C9.87498 3 7.92249 3.73712 6.38281 4.96875L19.0303 17.6162C20.2619 16.0766 21 14.125 21 12C21 7.02944 16.9706 3 12 3Z",
    fill: "#000"
  }));
});
Clear.displayName = 'Clear';
export { Clear };