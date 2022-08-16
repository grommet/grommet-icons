function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StarHalf = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StarHalf"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    fillOpacity: ".2",
    d: "M12 16.667V2l2.5 7.5H22L16 14l3 8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFC95E",
    d: "M12 16.667 5 22l3-8-6-4.5h7.5L12 2z"
  })));
});
StarHalf.displayName = 'StarHalf';
export { StarHalf };