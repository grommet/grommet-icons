function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Mail = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mail"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#01A982",
    fillRule: "evenodd",
    d: "M23 20V6l-11 9L1 6v14h22zm-11-8 10-8H2l10 8z"
  }));
});
Mail.displayName = 'Mail';
export { Mail };