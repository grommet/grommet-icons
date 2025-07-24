function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Radial = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Radial"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0.453613C18.6274 0.453613 24 5.8262 24 12.4536C24 19.081 18.6274 24.4536 12 24.4536C5.37258 24.4536 0 19.081 0 12.4536C0 5.8262 5.37258 0.453613 12 0.453613ZM12 2.45361C6.47715 2.45361 2 6.93077 2 12.4536C2 17.9765 6.47715 22.4536 12 22.4536C17.5228 22.4536 22 17.9765 22 12.4536C22 6.93077 17.5228 2.45361 12 2.45361Z",
    fill: "#000"
  }));
});
Radial.displayName = 'Radial';
export { Radial };