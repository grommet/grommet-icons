function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Previous = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Previous"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.293 1.29302C16.6836 0.902491 17.3166 0.902491 17.7071 1.29302C18.0975 1.68355 18.0976 2.31658 17.7071 2.70708L8.41414 12L17.7071 21.293C18.0975 21.6835 18.0976 22.3166 17.7071 22.7071C17.3166 23.0976 16.6836 23.0975 16.293 22.7071L6.29305 12.7071C5.90252 12.3166 5.90252 11.6835 6.29305 11.293L16.293 1.29302Z",
    fill: "#000"
  }));
});
Previous.displayName = 'Previous';
export { Previous };