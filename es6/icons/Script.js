function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Script = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Script"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 1a4 4 0 0 0-4 4v1h5.847L4.01 18.859l-.01.07V19a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1h-5.847L19.99 5.141l.01-.07V5a4 4 0 0 0-4-4H4zm0 2a2 2 0 0 0-1.732 1h3.464A2 2 0 0 0 4 3zm3.465 0H16a2 2 0 0 1 1.999 1.936L16.133 18H10v1a2 2 0 0 1-3.999.064L7.99 5.141l.01-.07V5c0-.729-.195-1.412-.535-2zM20 21h-8.535a3.97 3.97 0 0 0 .409-1h9.858A2 2 0 0 1 20 21z",
    fill: "#000"
  }));
});
Script.displayName = 'Script';
export { Script };