function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Image = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Image"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.76926 23 1.88117 21.5387 1.2373 19.5215L1.15234 19.4697L1.19922 19.3955C1.07065 18.9524 1 18.4845 1 18V6C1 3.23858 3.23858 1 6 1H18ZM18.1318 10.0967C17.726 9.36611 16.6565 9.42591 16.335 10.1973L14.1924 15.3379C13.3528 17.3526 10.7323 17.8078 9.25781 16.2607L9.11914 16.1045L8 14.7627C7.56424 14.2398 6.74465 14.295 6.38379 14.8721L3.44727 19.5703C3.97545 20.4271 4.9196 21 6 21H18C19.6569 21 21 19.6569 21 18V15.2578L18.1318 10.0967ZM6 3C4.34315 3 3 4.34315 3 6V16.5127L4.6875 13.8125C5.76989 12.0807 8.22968 11.9126 9.53711 13.4814L10.6553 14.8242C11.1361 15.4011 12.0578 15.2616 12.3467 14.5684L14.4883 9.42773C15.4528 7.11343 18.6622 6.93324 19.8799 9.125L21 11.1406V6C21 4.34315 19.6569 3 18 3H6Z",
    fill: "#000"
  }));
});
Image.displayName = 'Image';
export { Image };