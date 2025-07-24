function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var FolderAdd = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FolderAdd"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 13C19.5523 13 20 13.4477 20 14V17H23C23.5523 17 24 17.4477 24 18C24 18.5523 23.5523 19 23 19H20V22C20 22.5523 19.5523 23 19 23C18.4477 23 18 22.5523 18 22V19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H18V14C18 13.4477 18.4477 13 19 13Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 2C9.94427 2 10.8338 2.44478 11.4004 3.2002L13.2002 5.59961L13.2754 5.68945C13.463 5.88661 13.7245 6 14 6H20C21.6569 6 23 7.34315 23 9V10.5C23 11.0523 22.5523 11.5 22 11.5C21.4477 11.5 21 11.0523 21 10.5V9C21 8.44771 20.5523 8 20 8H14C13.1146 8 12.2779 7.60895 11.71 6.9375L11.5996 6.7998L9.7998 4.40039C9.61095 4.14858 9.31476 4 9 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H11.5C12.0523 20 12.5 20.4477 12.5 21C12.5 21.5523 12.0523 22 11.5 22H4C2.34315 22 1 20.6569 1 19V5C1 3.34315 2.34315 2 4 2H9Z",
    fill: "#000"
  }));
});
FolderAdd.displayName = 'FolderAdd';
export { FolderAdd };