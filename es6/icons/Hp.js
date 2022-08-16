function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Hp = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Hp"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "M8.421 0 5 15.127h2.138L10.56 0H8.421zm8.993 8.873-1.496 6.225h2.138l1.496-6.225h-2.138zm-3.635 0L10.36 24h2.138l3.42-15.127H13.78zm-3.647 0-1.497 6.225h2.138l1.496-6.225h-2.137z"
  }));
});
Hp.displayName = 'Hp';
export { Hp };