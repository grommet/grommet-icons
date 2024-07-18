function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
import { generatePrefix } from '../utils';
var Xing = /*#__PURE__*/forwardRef(function (props, ref) {
  var prefix = generatePrefix('Xing');
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Xing"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#" + prefix + "-a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#005A5F",
    d: "M3.86 4.74c-.209 0-.384.074-.472.217-.092.147-.078.338.02.53l2.34 4.052c.004.008.004.013 0 .02l-3.678 6.49c-.096.19-.091.383 0 .53a.51.51 0 0 0 .453.237h3.461c.517 0 .767-.35.944-.669l3.737-6.608-2.38-4.15c-.172-.306-.433-.649-.963-.649H3.86Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#D4D600",
    d: "M18.401 0c-.517 0-.74.326-.927.66 0 0-7.456 13.224-7.702 13.658l4.918 9.023c.172.307.437.659.967.659h3.457c.209 0 .372-.078.46-.221.092-.148.09-.343-.007-.535l-4.88-8.915a.02.02 0 0 1 0-.023L22.351.756c.096-.192.098-.387.007-.535C22.27.08 22.106 0 21.898 0H18.4Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: prefix + "-a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
});
Xing.displayName = 'Xing';
export { Xing };