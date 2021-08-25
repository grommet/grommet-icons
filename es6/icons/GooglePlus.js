function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var GooglePlus = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlus"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    fillRule: "evenodd",
    d: "M.02 11.203c.066-3.906 3.676-7.327 7.603-7.197 1.882-.087 3.65.728 5.091 1.872a27.061 27.061 0 0 1-1.932 1.991C9.05 6.68 6.586 6.338 4.853 7.713c-2.478 1.705-2.59 5.731-.207 7.567 2.318 2.092 6.7 1.053 7.34-2.15-1.451-.022-2.907 0-4.36-.048-.003-.861-.007-1.723-.003-2.585a707.94 707.94 0 0 1 7.286.008c.145 2.027-.124 4.185-1.376 5.86-1.896 2.655-5.702 3.43-8.672 2.292-2.98-1.13-5.092-4.26-4.84-7.454m19.623-2.882h2.165c.004.721.007 1.445.015 2.165.724.008 1.452.008 2.176.015v2.154c-.724.007-1.448.011-2.176.018-.008.724-.011 1.445-.015 2.165H19.64c-.007-.72-.007-1.44-.014-2.161l-2.177-.022v-2.154c.725-.007 1.449-.01 2.177-.015.003-.724.01-1.444.018-2.165"
  }));
});
GooglePlus.displayName = 'GooglePlus';
export { GooglePlus };