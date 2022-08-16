function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Cafeteria = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Cafeteria"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 1v7c0 1.657-1.347 3-2.997 3H5.997A3.002 3.002 0 0 1 3 8V1m3 6V1m3 6V1M6 11v10.504C6 22.33 6.666 23 7.5 23c.828 0 1.5-.68 1.5-1.496V11m6 7v3.5a1.5 1.5 0 1 0 3-.005V15s3 0 3-3V7c0-3-2-5-6-5v16z"
  }));
});
Cafeteria.displayName = 'Cafeteria';
export { Cafeteria };