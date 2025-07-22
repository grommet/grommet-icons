function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var FormPin = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FormPin"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m4 19 4.455-4.454M12.273 5 18 10.727m-4.454-4.454L9.727 10.09s-2.545-.636-4.454 1.273l6.363 6.363c1.91-1.909 1.273-4.454 1.273-4.454l3.818-3.818-3.181-3.182Z"
  }));
});
FormPin.displayName = 'FormPin';
export { FormPin };