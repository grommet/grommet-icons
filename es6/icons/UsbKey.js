function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var UsbKey = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UsbKey"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.1025 5.28174C16.6067 5.33307 17 5.75918 17 6.27686V7.27686H23L23.1025 7.28174C23.6067 7.33307 24 7.75918 24 8.27686V16.2769C24 16.8291 23.5523 17.2769 23 17.2769H17V18.2769C17 18.8291 16.5523 19.2769 16 19.2769H5C2.23858 19.2769 0 17.0383 0 14.2769V10.2769C0 7.51543 2.23858 5.27686 5 5.27686H16L16.1025 5.28174ZM5 7.27686C3.34315 7.27686 2 8.62 2 10.2769V14.2769C2 15.9337 3.34315 17.2769 5 17.2769H15V7.27686H5ZM17 15.2769H22V9.27686H17V15.2769Z",
    fill: "#000"
  }));
});
UsbKey.displayName = 'UsbKey';
export { UsbKey };