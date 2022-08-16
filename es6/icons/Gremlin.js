function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Gremlin = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gremlin"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 2c.5 0 1-.321 1-1 0-.113-2-.075-2 0 0 .679.5 1 1 1zm-9 8s.003-8 0-12c.003-4-.447-8 9-8s8.997 4 9 8c-.003 4 0 12 0 12m-.932-17c3.26 0 3.58-3.58 2.046-5.114C20.58.352 17 .673 17 3.932M7 19c0-.203 2.5 1.152 5 1 2.5.152 5-1.499 5-1 0 .802-1.5 2-5 2s-5-1.493-5-2zM3.945 7C.605 7 .38 3.42 1.908 1.886 3.435.352 7 .673 7 3.932"
  }));
});
Gremlin.displayName = 'Gremlin';
export { Gremlin };