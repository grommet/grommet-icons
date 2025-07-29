function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Pinterest = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Pinterest"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0C5.37225 0 0 5.37225 0 12C0 17.0835 3.16275 21.426 7.62675 23.1742C7.52175 22.2248 7.42725 20.7682 7.66875 19.7318C7.88625 18.7957 9.07575 13.767 9.07575 13.767C9.07575 13.767 8.7165 13.0485 8.7165 11.9858C8.7165 10.317 9.684 9.07125 10.8877 9.07125C11.9115 9.07125 12.4065 9.84 12.4065 10.7618C12.4065 11.7915 11.751 13.3305 11.4128 14.757C11.13 15.9517 12.0112 16.926 13.1895 16.926C15.3225 16.926 16.962 14.6768 16.962 11.4307C16.962 8.5575 14.8973 6.54825 11.949 6.54825C8.535 6.54825 6.531 9.1095 6.531 11.7563C6.531 12.7875 6.92775 13.8938 7.4235 14.4945C7.52175 14.6138 7.536 14.7172 7.50675 14.8387C7.416 15.2183 7.2135 16.0328 7.17375 16.2C7.12125 16.419 6.99975 16.4662 6.7725 16.3605C5.27325 15.6623 4.3365 13.4715 4.3365 11.7113C4.3365 7.926 7.08675 4.44975 12.2655 4.44975C16.428 4.44975 19.6635 7.416 19.6635 11.3805C19.6635 15.516 17.0557 18.8445 13.4362 18.8445C12.2205 18.8445 11.0775 18.2122 10.686 17.466C10.686 17.466 10.0845 19.7572 9.93825 20.319C9.6675 21.3608 8.93625 22.6672 8.4465 23.4645C9.57 23.8125 10.7633 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z",
    fill: "#BD081C"
  }));
});
Pinterest.displayName = 'Pinterest';
export { Pinterest };