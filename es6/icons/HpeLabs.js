function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var HpeLabs = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "HpeLabs"
  }, props), /*#__PURE__*/React.createElement("polyline", {
    fill: "none",
    stroke: "#01A982",
    strokeWidth: "2",
    points: "14 23 5 23 5 2 17 2 17 15 13 15 13 6 9 6 9 19 20 19"
  }));
});
HpeLabs.displayName = 'HpeLabs';
export { HpeLabs };