function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var EmptyCircle = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "EmptyCircle"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.45361C18.0751 1.45361 23 6.37848 23 12.4536C23 18.5287 18.0751 23.4536 12 23.4536C5.92487 23.4536 1 18.5287 1 12.4536C1 6.37848 5.92487 1.45361 12 1.45361ZM12 3.45361C7.02944 3.45361 3 7.48305 3 12.4536C3 17.4242 7.02944 21.4536 12 21.4536C16.9706 21.4536 21 17.4242 21 12.4536C21 7.48305 16.9706 3.45361 12 3.45361Z",
    fill: "#000"
  }));
});
EmptyCircle.displayName = 'EmptyCircle';
export { EmptyCircle };