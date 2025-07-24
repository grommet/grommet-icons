function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var LinkNext = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LinkNext"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.293 20.7069C13.6835 21.0975 14.3165 21.0975 14.707 20.7069L23.4141 11.9999L14.707 3.29287C14.3165 2.90238 13.6835 2.90237 13.293 3.29287C12.9025 3.68339 12.9025 4.31641 13.293 4.70693L19.5859 10.9999H2C1.44778 10.9999 1.00009 11.4477 1 11.9999C1.00001 12.5522 1.44772 12.9999 2 12.9999H19.5859L13.293 19.2929C12.9025 19.6834 12.9025 20.3164 13.293 20.7069Z",
    fill: "#000"
  }));
});
LinkNext.displayName = 'LinkNext';
export { LinkNext };