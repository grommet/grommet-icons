function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var DocumentStore = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentStore"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M3 12s1-2 6-2 6 2 6 2v9s-1 2-6 2-6-2-6-2v-9zm0 5s2 2 6 2 6-2 6-2M3 13s2 2 6 2 6-2 6-2"
  }));
});
DocumentStore.displayName = 'DocumentStore';
export { DocumentStore };