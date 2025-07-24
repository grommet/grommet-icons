function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Bookmark = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Bookmark"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 1C18.6569 1 20 2.34315 20 4V20.0566C20 21.6832 18.1616 22.6296 16.8379 21.6846L12 18.2285L7.16211 21.6846C5.8384 22.6296 4 21.6832 4 20.0566V4C4 2.34315 5.34315 1 7 1H17ZM7 3C6.44772 3 6 3.44772 6 4V20.0566L10.8379 16.6016C11.5332 16.105 12.4668 16.105 13.1621 16.6016L18 20.0566V4C18 3.44772 17.5523 3 17 3H7Z",
    fill: "#000"
  }));
});
Bookmark.displayName = 'Bookmark';
export { Bookmark };