function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Emoji = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Emoji"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 1.73A10.27 10.27 0 1 0 22.24 12 10.25 10.25 0 0 0 12 1.73zM21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.8 11.05a1.55 1.55 0 1 0-1.51-1.5 1.56 1.56 0 0 0 1.51 1.5zm6.64 0a1.55 1.55 0 1 0 0-3.09 1.53 1.53 0 0 0-1.51 1.59 1.51 1.51 0 0 0 1.51 1.5zm-3.25 5.3A6.58 6.58 0 0 1 6.9 13.5a5.71 5.71 0 0 0 5.3 4 5.54 5.54 0 0 0 5.31-4 6.27 6.27 0 0 1-5.32 2.85z"
  }));
});
Emoji.displayName = 'Emoji';
export { Emoji };