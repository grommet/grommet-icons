function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var CapacityLow = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CapacityLow"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 8.27686C7.32843 8.27686 8 8.94843 8 9.77686V14.7769C8 15.6053 7.32843 16.2769 6.5 16.2769C5.67157 16.2769 5 15.6053 5 14.7769V9.77686C5 8.94843 5.67157 8.27686 6.5 8.27686Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 4.27686C19.7614 4.27686 22 6.51543 22 9.27686C23.1046 9.27686 24 10.1723 24 11.2769V13.2769C24 14.3814 23.1046 15.2769 22 15.2769C22 18.0383 19.7614 20.2769 17 20.2769H6C3.23858 20.2769 1 18.0383 1 15.2769V9.27686C1 6.51543 3.23858 4.27686 6 4.27686H17ZM6 6.27686C4.34315 6.27686 3 7.62 3 9.27686V15.2769C3 16.9337 4.34315 18.2769 6 18.2769H17C18.6569 18.2769 20 16.9337 20 15.2769V9.27686C20 7.62 18.6569 6.27686 17 6.27686H6Z",
    fill: "#000"
  }));
});
CapacityLow.displayName = 'CapacityLow';
export { CapacityLow };