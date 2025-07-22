function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var TextAlignRight = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "TextAlignRight"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M.46 3.06h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73zM.46 13.53h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73z"
  }));
});
TextAlignRight.displayName = 'TextAlignRight';
export { TextAlignRight };