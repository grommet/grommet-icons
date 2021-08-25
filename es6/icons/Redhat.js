function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Redhat = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Redhat"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#E00",
    d: "M5.832 6.125c.645-2.404 1.531-3.365 2.66-2.885 1.691.722 2.416.481 3.141 0 .484-.32 1.209-.32 2.175 0l3.384 1.443c.967.32 1.611 1.442 1.934 3.366.322 1.923.564 3.205.725 3.846 2.417.962 3.786 2.405 4.109 4.328.483 2.885-3.384 5.77-11.36 4.327C4.624 19.108-.452 14.54.032 11.895c.322-1.763 1.853-2.644 4.592-2.644l1.208-3.126z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    d: "M4.887 8.538c1.462 2.507 4.142 4.074 8.04 4.7 3.897.627 6.171 0 6.82-1.88.278 1.417.278 2.357 0 2.82-.914 1.527-3.411 1.969-6.09 1.646-3.897-.47-6.74-1.724-8.526-3.76-.487-.627-.731-1.175-.731-1.646 0-.47.162-1.096.487-1.88z"
  })));
});
Redhat.displayName = 'Redhat';
export { Redhat };