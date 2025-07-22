function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Deliver = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Deliver"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 18H1V3h13v14m0 1H9m-3 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm11 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM14 8h5l4 5v5h-3"
  }));
});
Deliver.displayName = 'Deliver';
export { Deliver };