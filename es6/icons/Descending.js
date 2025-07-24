function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Descending = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Descending"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.0002 3C12.5523 3.00016 13.0002 3.44782 13.0002 4V17.5859L16.0929 14.4932C16.4835 14.1026 17.1165 14.1027 17.507 14.4932C17.8974 14.8837 17.8975 15.5167 17.507 15.9072L12.0002 21.4141L6.49334 15.9072C6.10282 15.5167 6.10283 14.8837 6.49334 14.4932C6.88386 14.1027 7.51691 14.1027 7.9074 14.4932L11.0002 17.5859V4C11.0002 3.44773 11.4479 3.00002 12.0002 3Z",
    fill: "#000"
  }));
});
Descending.displayName = 'Descending';
export { Descending };