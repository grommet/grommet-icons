function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
import { generatePrefix } from '../utils';
var Venmo = /*#__PURE__*/forwardRef(function (props, ref) {
  var prefix = generatePrefix('Venmo');
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Venmo"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#" + prefix + "-a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#008CFF",
    fillRule: "evenodd",
    d: "M24 12c0 6.628-5.372 12-12 12-6.627 0-12-5.372-12-12C0 5.373 5.373 0 12 0c6.628 0 12 5.373 12 12Zm-5.982-3.571c0-1-.21-1.79-.677-2.558l-4.035.814c.256.535.42 1.185.42 2.14 0 1.744-1.237 4.303-2.24 5.93L10.413 6.15l-4.431.42 2.03 12.094h5.06c2.216-2.907 4.946-7.047 4.946-10.234Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: prefix + "-a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
});
Venmo.displayName = 'Venmo';
export { Venmo };