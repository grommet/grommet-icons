function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var FormCut = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FormCut"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m18 7.524-7.857 6.286L18 7.524zm0 8.38L10.143 9.62 18 15.905zm-9.429-5.761a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143zm0 6.286a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143z"
  }));
});
FormCut.displayName = 'FormCut';
export { FormCut };