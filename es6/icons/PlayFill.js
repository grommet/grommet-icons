function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var PlayFill = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PlayFill"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2 3.69877C2.00053 2.17428 3.63886 1.21038 4.97168 1.95073L19.9121 10.2515L20.0371 10.3267C21.2421 11.1099 21.2422 12.8903 20.0371 13.6734L19.9121 13.7476L4.97168 22.0484C3.63866 22.789 2.00009 21.8252 2 20.3003V3.69877Z",
    fill: "#000"
  }));
});
PlayFill.displayName = 'PlayFill';
export { PlayFill };