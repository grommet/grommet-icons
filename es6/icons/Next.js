function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Next = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Next"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.29305 1.29302C6.68357 0.902491 7.31658 0.902491 7.70711 1.29302L17.7071 11.293C18.0975 11.6835 18.0976 12.3166 17.7071 12.7071L7.70711 22.7071C7.31661 23.0976 6.68358 23.0975 6.29305 22.7071C5.90252 22.3166 5.90252 21.6835 6.29305 21.293L15.586 12L6.29305 2.70708C5.90252 2.31655 5.90252 1.68354 6.29305 1.29302Z",
    fill: "#000"
  }));
});
Next.displayName = 'Next';
export { Next };