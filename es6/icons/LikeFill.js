function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var LikeFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LikeFill"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.6602 2.00424C14.3731 1.32129 15.4116 1.08318 16.3584 1.39877L16.5068 1.45248C17.9642 2.03344 18.6106 3.74935 17.8994 5.14779L17.8242 5.28647L16.2412 8.00033H19.6387C21.4346 8.00033 22.8148 9.56241 22.6221 11.3226L22.5986 11.4935L21.5439 17.8216C21.1421 20.2326 19.0555 22.0003 16.6113 22.0003H11.4922C11.1857 22.0003 10.8801 21.9713 10.5791 21.9154L10.2793 21.8509L7.16602 21.0716C6.61985 21.6425 5.85243 22.0003 5 22.0003H2C1.44786 22.0003 1.00024 21.5524 1 21.0003C1.00009 20.4481 1.44777 20.0003 2 20.0003H5C5.55214 20.0003 5.99976 19.5524 6 19.0003V11.0003L5.99512 10.8978C5.94391 10.3935 5.51777 10.0003 5 10.0003H2C1.44786 10.0003 1.00024 9.55241 1 9.00033C1.0001 8.44813 1.44777 8.00033 2 8.00033H5C5.6306 8.00033 6.21528 8.19531 6.69824 8.52768L9.23242 6.6849L9.52344 6.46225C9.80771 6.23183 10.0733 5.97866 10.3184 5.70639L13.5225 2.14682L13.6602 2.00424Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.20215 17.0052C4.70639 17.0564 5.09952 17.4826 5.09961 18.0003C5.09939 18.5179 4.70629 18.9433 4.20215 18.9945L4.09961 19.0003H4C3.44786 19.0003 3.00024 18.5524 3 18.0003C3.00009 17.4481 3.44777 17.0003 4 17.0003H4.09961L4.20215 17.0052Z",
    fill: "#000"
  }));
});
LikeFill.displayName = 'LikeFill';
export { LikeFill };