function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Square = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Square"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.4444 8.33333H9.55556C8.88089 8.33333 8.33333 8.88089 8.33333 9.55556V14.4444C8.33333 15.1191 8.88089 15.6667 9.55556 15.6667H14.4444C15.1191 15.6667 15.6667 15.1191 15.6667 14.4444V9.55556C15.6667 8.88089 15.1191 8.33333 14.4444 8.33333ZM18.1111 22H5.88889C3.74128 22 2 20.2587 2 18.1111V5.88889C2 3.74128 3.74128 2 5.88889 2H18.1111C20.2587 2 22 3.74128 22 5.88889V18.1111C22 20.2587 20.2587 22 18.1111 22ZM18.1111 24C21.3633 24 24 21.3633 24 18.1111V5.88889C24 2.63672 21.3633 0 18.1111 0H5.88889C2.63672 0 0 2.63672 0 5.88889V18.1111C0 21.3633 2.63672 24 5.88889 24H18.1111Z",
    fill: "#28C101"
  }));
});
Square.displayName = 'Square';
export { Square };