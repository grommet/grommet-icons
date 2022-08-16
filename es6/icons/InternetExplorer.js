function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var InternetExplorer = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "InternetExplorer"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#00A1F1",
    fillRule: "evenodd",
    d: "M24 12.337c0-1.898-.491-3.68-1.351-5.229 3.666-8.298-3.929-7.083-4.352-7-1.609.315-3.097.82-4.47 1.461a10.868 10.868 0 0 0-.612-.017C8.09 1.552 3.8 5.126 2.702 9.918c2.702-3.03 4.592-4.253 5.724-4.742-.18.161-.358.324-.532.489l-.17.165c-.115.11-.23.22-.342.332l-.196.2c-.1.101-.199.202-.295.304-.07.072-.136.144-.204.216a26.855 26.855 0 0 0-1.15 1.31 31.222 31.222 0 0 0-.41.505l-.2.253-.183.24-.206.272-.14.193a33.453 33.453 0 0 0-1.168 1.7l-.002.003c-.093.145-.182.287-.27.428l-.014.023c-.088.141-.173.28-.255.418l-.009.014c-.222.37-.427.727-.613 1.063-.971 1.76-1.444 2.99-1.464 3.063-3.068 10.966 6.505 6.335 7.841 5.644a10.74 10.74 0 0 0 4.77 1.11c4.69 0 8.68-2.993 10.165-7.173h-5.666c-.839 1.416-2.453 2.376-4.308 2.376-2.717 0-4.92-2.059-4.92-4.598h15.426c.059-.455.089-.919.089-1.39zM21.985 1.724c.929.627 1.674 1.61.394 4.926a10.82 10.82 0 0 0-5.267-4.372c.998-.482 3.47-1.501 4.873-.554zM2.248 21.989c-.757-.776-.89-2.665.779-6.108a10.816 10.816 0 0 0 4.696 5.739c-1.08.595-3.95 1.934-5.475.369zM8.46 10.776c.086-2.468 2.235-4.444 4.874-4.444 2.64 0 4.787 1.976 4.874 4.444H8.46z"
  }));
});
InternetExplorer.displayName = 'InternetExplorer';
export { InternetExplorer };