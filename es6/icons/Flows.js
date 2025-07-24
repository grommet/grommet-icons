function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Flows = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Flows"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 13C21.2091 13 23 14.7909 23 17V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V17C1 14.7909 2.79086 13 5 13H19ZM5 15C3.89543 15 3 15.8954 3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17C21 15.8954 20.1046 15 19 15H5Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 1C21.2091 1 23 2.79086 23 5V7C23 9.20914 21.2091 11 19 11H5C2.79086 11 1 9.20914 1 7V5C1 2.79086 2.79086 1 5 1H19ZM5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H19C20.1046 9 21 8.10457 21 7V5C21 3.89543 20.1046 3 19 3H5Z",
    fill: "#000"
  }));
});
Flows.displayName = 'Flows';
export { Flows };