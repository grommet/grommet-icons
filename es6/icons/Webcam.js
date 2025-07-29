function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Webcam = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Webcam"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C16.9706 1 21 5.02944 21 10C21 13.9184 18.4952 17.2496 15 18.4854V21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21H9V18.4854C5.50484 17.2496 3 13.9184 3 10C3 5.02944 7.02944 1 12 1ZM13 18.9424C12.6716 18.9787 12.3381 19 12 19C11.6619 19 11.3284 18.9787 11 18.9424V21H13V18.9424ZM12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3Z",
    fill: "#000"
  }));
});
Webcam.displayName = 'Webcam';
export { Webcam };