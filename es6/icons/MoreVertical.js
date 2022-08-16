function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var MoreVertical = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "MoreVertical"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 14h-4v-4h4v4zm0-7h-4V3h4v4zm0 14h-4v-4h4v4z"
  }));
});
MoreVertical.displayName = 'MoreVertical';
export { MoreVertical };