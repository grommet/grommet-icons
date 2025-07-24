function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusWarningSmall = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StatusWarningSmall"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1258 3.67358C11.5068 2.98777 12.4932 2.98777 12.8742 3.67358L22.1746 20.4145C22.5449 21.081 22.063 21.9001 21.3005 21.9001H2.69951C1.93703 21.9001 1.45506 21.081 1.82536 20.4145L11.1258 3.67358Z",
    fill: "#D36D00"
  }));
});
StatusWarningSmall.displayName = 'StatusWarningSmall';
export { StatusWarningSmall };