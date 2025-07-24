function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CaretUp = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CaretUp"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5304 6.65524C11.3159 6.0146 12.4749 6.06075 13.2071 6.79293L20.7931 14.3789C22.0526 15.6387 21.1605 17.7927 19.379 17.7929H4.20712C2.42539 17.7929 1.53328 15.6388 2.79305 14.3789L10.379 6.79293L10.5304 6.65524ZM4.20712 15.7929H19.379L11.7931 8.20699L4.20712 15.7929Z",
    fill: "#000"
  }));
});
CaretUp.displayName = 'CaretUp';
export { CaretUp };