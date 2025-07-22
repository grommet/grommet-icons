function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var HpeLabs = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "HpeLabs"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#01A982",
    strokeWidth: "2",
    d: "M14 23H5V2h12v13h-4V6H9v13h11"
  }));
});
HpeLabs.displayName = 'HpeLabs';
export { HpeLabs };