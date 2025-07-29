function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Turbolinux = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Turbolinux"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.41886 6.22224L9.96581 7.45268H6.61541L6 6.22224H9.41886ZM13.111 12.1707L7.09383 0L14.1364 4.17057L14.5466 6.15398H17.8971L17.1449 8.20509H14.957L16.7346 16.4785L12.5637 14.4268L14.6834 24L8.18785 10.8034L13.111 12.1707Z",
    fill: "#528DC4"
  }));
});
Turbolinux.displayName = 'Turbolinux';
export { Turbolinux };