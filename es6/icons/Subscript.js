function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Subscript = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Subscript"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m18.74 3.63.19 4.07h-.49a4.92 4.92 0 0 0-.38-1.54A2.58 2.58 0 0 0 17 5.07a3.68 3.68 0 0 0-1.73-.35h-2.44V18a3.54 3.54 0 0 0 .35 2 1.92 1.92 0 0 0 1.5.54h.6V21H7.92v-.5h.61a1.76 1.76 0 0 0 1.56-.67 3.88 3.88 0 0 0 .29-1.83V4.72H8.29a5.79 5.79 0 0 0-1.73.18 2.37 2.37 0 0 0-1.14.93 3.78 3.78 0 0 0-.56 1.87h-.48l.21-4.07zm3.74 13.05h.33v5.59a1.13 1.13 0 0 0 .06.4.41.41 0 0 0 .17.21.63.63 0 0 0 .28.08h.4v.27h-2.96V23h.45a.62.62 0 0 0 .29-.1.38.38 0 0 0 .15-.22 1.4 1.4 0 0 0 0-.37v-3.89a4.45 4.45 0 0 0 0-.64c0-.15-.1-.23-.24-.23a.82.82 0 0 0-.28 0l-.3.13-.18-.25z"
  }));
});
Subscript.displayName = 'Subscript';
export { Subscript };