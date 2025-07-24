function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Aruba = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Aruba"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#FF8300",
    fillRule: "evenodd",
    d: "M12.1099561,17.3015551 C9.03598293,17.3015551 6.50849391,14.8423766 6.50849391,11.836714 C6.50849391,8.83105139 9.03598293,6.37187289 12.1099561,6.37187289 C15.1839292,6.37187289 17.7114182,8.83105139 17.7114182,11.836714 C17.7114182,14.8423766 15.1839292,17.3015551 12.1099561,17.3015551 L12.1099561,17.3015551 Z M12.1099561,2 C6.50849391,2 2,6.4401834 2,11.836714 C2,17.3015551 6.50849391,21.673428 12.1099561,21.673428 C14.4325135,21.673428 16.5501395,20.9220123 18.2579023,19.6241126 C19.28256,21.3318754 22.2199121,21.673428 22.2199121,21.673428 L22.2199121,11.836714 C22.2199121,6.4401834 17.7114182,2 12.1099561,2 L12.1099561,2 Z"
  }));
});
Aruba.displayName = 'Aruba';
export { Aruba };