function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CreditCard = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CreditCard"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 5c0-.552.44-1 1.002-1h19.996A1 1 0 0 1 23 5v14c0 .552-.44 1-1.002 1H2.002A1 1 0 0 1 1 19V5zm0 3h22v2H1V8zm4 7h2v.5H5V15zm5 0h6v.5h-6V15z"
  }));
});
CreditCard.displayName = 'CreditCard';
export { CreditCard };