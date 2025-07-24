function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var PersonalComputer = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PersonalComputer"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.9991 2.27686C20.1037 2.27686 20.9991 3.17229 20.9991 4.27686V15.0405L23.17 19.3823L23.2276 19.5073C23.7744 20.8081 22.8222 22.2766 21.3819 22.2769H2.61728C1.13101 22.2763 0.164574 20.7119 0.82919 19.3823L2.99911 15.0425V4.27686C2.99911 3.17258 3.89495 2.27733 4.99911 2.27686H18.9991ZM2.61728 20.2769H8.99911C8.99911 19.7249 9.44723 19.2773 9.99911 19.2769H13.9991L14.1017 19.2817C14.606 19.3329 14.9991 19.759 14.9991 20.2769H21.3819L19.3819 16.2769H4.61728L2.61728 20.2769ZM4.99911 14.2769H18.9991V4.27686H4.99911V14.2769Z",
    fill: "#000"
  }));
});
PersonalComputer.displayName = 'PersonalComputer';
export { PersonalComputer };