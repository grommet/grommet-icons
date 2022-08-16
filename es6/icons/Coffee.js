function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Coffee = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Coffee"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    d: "M6.264 20.192c4.096 2.868 8.602-.081 11.47-4.177 2.868-4.095 4.097-9.338.002-12.206-4.096-2.868-8.602.08-11.47 4.176-2.868 4.096-4.098 9.339-.002 12.207z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000",
    d: "M16.589 5.447c-1.393.246-5.326 2.375-5.408 5.98-.083 3.604-2.787 6.594-3.77 7.126 1.803.042 5.326-2.375 5.408-5.98.083-3.604 2.786-6.594 3.77-7.126z"
  })));
});
Coffee.displayName = 'Coffee';
export { Coffee };