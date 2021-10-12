function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var StatusCritical = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Status is critical"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12.703 2.703a.99.99 0 0 0-1.406 0l-8.594 8.594a.99.99 0 0 0 0 1.406l8.594 8.594a.99.99 0 0 0 1.406 0l8.594-8.594a.99.99 0 0 0 0-1.406l-8.594-8.594zM8.983 14.7 14.7 8.983m-5.717 0L14.7 14.7"
  }));
});
StatusCritical.displayName = 'StatusCritical';
export { StatusCritical };