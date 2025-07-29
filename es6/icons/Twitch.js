function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Twitch = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Twitch"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.673 16.163L20.103 12.734V1.959H3.939V16.163H8.347V19.102L11.287 16.163H16.673ZM1 3.92L1.98 0H22.06V13.715L14.224 21.55H10.307L7.857 24H5.409V21.55H1V3.92ZM11.286 11.756H9.326V5.877H11.286V11.756ZM16.673 11.756H14.714V5.877H16.674V11.755L16.673 11.756Z",
    fill: "#6441A5"
  }));
});
Twitch.displayName = 'Twitch';
export { Twitch };