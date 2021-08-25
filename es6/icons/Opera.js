function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Opera = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Opera"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#CC0F16",
    fillRule: "evenodd",
    d: "M12.125 0C5.568 0 1 4.756 1 11.889 1 18.236 5.438 24 12.125 24c6.752 0 11.226-5.763 11.226-12.111C23.35 4.699 18.62 0 12.125 0zm0 21.32a3.308 3.308 0 0 1-1.425-.298c-1.141-.575-1.828-1.85-2.23-3.41-.435-1.809-.484-4.004-.484-5.926 0-3.431.25-6.532 1.65-8.08.612-.65 1.418-1.034 2.476-1.037h.013c1.379 0 2.345.675 3.016 1.734 1 1.688 1.227 4.424 1.227 7.368 0 4.18-.278 9.65-4.243 9.65z"
  }));
});
Opera.displayName = 'Opera';
export { Opera };