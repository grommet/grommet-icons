function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Restroom = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Restroom"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C18.5523 1 19 1.44772 19 2C19 2.55228 18.5523 3 18 3V9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H19.9736C19.8819 12.7669 19.5167 14.59 18.5146 16.0625C17.896 16.9715 17.0666 17.7017 16 18.207V21C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21V18.207C6.93343 17.7017 6.10399 16.9715 5.48535 16.0625C4.48334 14.59 4.11809 12.7669 4.02637 11H4C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H6V6C5.44772 6 5 5.55228 5 5C5 4.44772 5.44772 4 6 4V3C5.44772 3 5 2.55228 5 2C5 1.44772 5.44772 1 6 1H18ZM14 18.8291C13.3871 18.9391 12.7218 19 12 19C11.2782 19 10.6129 18.9391 10 18.8291V21H14V18.8291ZM6.02832 11C6.11902 12.5373 6.43953 13.9088 7.13965 14.9375C7.93637 16.108 9.34087 17 12 17C14.6591 17 16.0636 16.108 16.8604 14.9375C17.5605 13.9088 17.881 12.5373 17.9717 11H6.02832ZM8 4H9C9.55228 4 10 4.44772 10 5C10 5.55228 9.55228 6 9 6H8V9H16V3H8V4Z",
    fill: "#000"
  }));
});
Restroom.displayName = 'Restroom';
export { Restroom };