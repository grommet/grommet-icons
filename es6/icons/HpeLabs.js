function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var HpeLabs = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "HpeLabs"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 1V16H12V7H10V18H20V20H8V5H14V14H16V3H6V22H14V24H4V1H18Z",
    fill: "#01A982"
  }));
});
HpeLabs.displayName = 'HpeLabs';
export { HpeLabs };