function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Oracle = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Oracle"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.95736 18.9124C4.1167 18.9124 1 15.8035 1 11.9617C1 8.12001 4.1167 5 7.95736 5H16.0438C19.8855 5 23 8.12001 23 11.9617C23 15.8035 19.8855 18.9124 16.0438 18.9124H7.95736ZM15.8639 16.4585C18.3522 16.4585 20.3674 14.4489 20.3674 11.9617C20.3674 9.47461 18.3522 7.45382 15.8639 7.45382H8.13608C5.64895 7.45382 3.63256 9.47461 3.63256 11.9617C3.63256 14.4489 5.64895 16.4585 8.13608 16.4585H15.8639Z",
    fill: "#FF0000"
  }));
});
Oracle.displayName = 'Oracle';
export { Oracle };