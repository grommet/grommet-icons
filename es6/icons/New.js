function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var New = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "New"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.9999 1C12.5521 1 12.9999 1.44772 12.9999 2V10.1309L20.4452 5.16797C20.9047 4.86163 21.5255 4.98584 21.8319 5.44531C22.1382 5.90484 22.0141 6.52568 21.5545 6.83203L13.8026 12L21.5545 17.168L21.6366 17.2285C22.028 17.5508 22.1192 18.1238 21.8319 18.5547C21.5447 18.9854 20.981 19.1218 20.5331 18.8848L20.4452 18.832L12.9999 13.8682V22C12.9999 22.5523 12.5521 23 11.9999 23C11.4476 22.9999 10.9999 22.5522 10.9999 22V13.8682L3.55454 18.832C3.09502 19.1383 2.47415 19.0142 2.16782 18.5547C1.86155 18.0952 1.98574 17.4743 2.44517 17.168L10.1971 12L2.44517 6.83203L2.36314 6.77148C1.97179 6.44922 1.88061 5.8762 2.16782 5.44531C2.45498 5.01457 3.01871 4.87829 3.46665 5.11523L3.55454 5.16797L10.9999 10.1309V2C10.9999 1.44776 11.4476 1.00008 11.9999 1Z",
    fill: "#000"
  }));
});
New.displayName = 'New';
export { New };