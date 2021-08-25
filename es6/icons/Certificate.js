function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Certificate = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Certificate"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 0h18v4.083a6.002 6.002 0 0 1 3 10.39v9.396l-1.555-1.037L18 21.202l-2.445 1.63L14 23.87V20H1V0zm13 18v-3.528a6.002 6.002 0 0 1 3-10.39V2.001H3v16h11zm2-2.341v4.472l1.445-.963.555-.37.555.37L20 20.13v-4.47a5.99 5.99 0 0 1-2 .34 5.99 5.99 0 0 1-2-.341zM18 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-7 3H5V7h6v2zm-6 3h5v-2H5v2zm2 3H5v-2h2v2zM5 6h2V4H5v2z",
    fill: "#000"
  }));
});
Certificate.displayName = 'Certificate';
export { Certificate };