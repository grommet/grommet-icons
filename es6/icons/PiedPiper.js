function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var PiedPiper = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PiedPiper"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#609B4D",
    fillRule: "evenodd",
    d: "M0 19.421c2.274 0 4.042-.758 4.042-.758s3.032-7.579 7.326-7.579c3.285 0 3.79 2.527 3.79 2.527S19.958 4.263 24 3c-3.79 3.032-3.284 6.316-5.053 7.832-1.768 1.515-1.768.006-3.79 3.543-4.546.505-6.032 2.014-9.094 3.783 5.305-2.526 6.316-2.78 11.116-2.526.504.026.758.252.505.757-.733 1.466-1.28 3.673-2.273 3.537-5.558-.758-8.843.506-11.622.506-2.778 0-3.789-.506-3.789-1.01z"
  }));
});
PiedPiper.displayName = 'PiedPiper';
export { PiedPiper };