function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Mastercard = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mastercard"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 19C10.866 19 14 15.866 14 12C14 8.13401 10.866 5 7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19Z",
    fill: "#EA001B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 19C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5C13.134 5 10 8.13401 10 12C10 15.866 13.134 19 17 19Z",
    fill: "#FFA200",
    fillOpacity: "0.8"
  }));
});
Mastercard.displayName = 'Mastercard';
export { Mastercard };