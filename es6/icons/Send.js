function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Send = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Send"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.6288 2.07129C21.9522 1.94207 22.3196 1.99073 22.5985 2.19922C22.8776 2.40782 23.0285 2.74689 22.996 3.09376L21.496 19.0938C21.466 19.4123 21.2849 19.6973 21.0097 19.8604C20.7343 20.0234 20.3972 20.0449 20.1034 19.918L13.3612 17.002C13.3186 17.0752 13.2687 17.1452 13.2069 17.207L10.2069 20.207C9.93257 20.4814 9.52392 20.5725 9.15909 20.4404C8.79453 20.3083 8.53903 19.977 8.50382 19.5908L8.05948 14.71L1.60343 11.918C1.23282 11.7577 0.99439 11.3901 0.999911 10.9863C1.0055 10.5825 1.25387 10.2213 1.62882 10.0713L21.6288 2.07129ZM4.60245 11.0352L8.89932 12.8936L13.4853 10.1426C13.8829 9.90398 14.3931 9.97055 14.7167 10.3027C15.0399 10.635 15.0925 11.146 14.8437 11.5371L12.8827 14.6162L19.6317 17.5352L20.8505 4.53614L4.60245 11.0352Z",
    fill: "#000"
  }));
});
Send.displayName = 'Send';
export { Send };