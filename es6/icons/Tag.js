function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Tag = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Tag"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M11.706 22.294a.992.992 0 0 1-1.41.003l-8.593-8.594a1 1 0 0 1 .003-1.409L13 1h10v10L11.706 22.294zM6 12l6 6M9 9l6 6m2-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
  }));
});
Tag.displayName = 'Tag';
export { Tag };