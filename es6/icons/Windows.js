function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Windows = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Windows"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.923 0L10.959 1.893V11.481L23.923 11.379V0ZM0 3.398L0.009 11.553L9.782 11.498L9.778 2.066L0 3.398ZM0.008 20.681L9.781 22.025L9.773 12.585L0.007 12.522L0.008 20.681ZM10.959 22.171L23.923 24L23.927 12.674L10.941 12.652L10.959 22.171Z",
    fill: "#001589"
  }));
});
Windows.displayName = 'Windows';
export { Windows };