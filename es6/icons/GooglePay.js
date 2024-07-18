function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
import { generatePrefix } from '../utils';
var GooglePay = /*#__PURE__*/forwardRef(function (props, ref) {
  var prefix = generatePrefix('GooglePay');
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePay"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#" + prefix + "-a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#EB4434",
    d: "m12.645 14.34 5.937-10.285 3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.732 2.732 0 0 1-3.728 1l-3.002-1.732a1.909 1.909 0 0 1-.695-2.606Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FDBD00",
    d: "M12.012 7.2 4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.729 2.729 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2DA94F",
    d: "m18.582 4.053-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.729 2.729 0 0 0 1 3.728l2.289 1.32a2.729 2.729 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394l-3.302-1.904Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2B7AF0",
    d: "M9.496 6.885 6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108 2.332 1.343 1.012.582a4.138 4.138 0 0 1-1.27-5.51l.786-1.355 2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: prefix + "-a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
});
GooglePay.displayName = 'GooglePay';
export { GooglePay };