function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var SettingsOption = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "SettingsOption"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 9V0m3 12h9M0 12h9m3 12v-9m0 6a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.5 8.5 1 7.5m19.5 8 2.5 1M3 3l2.5 2.5M3 3l2.5 2.5M18 18l2.5 2.5m0-17.5L18 5.5M5.5 18 3 20.5m9-5.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8.5-6.5 2.5-1m-7.5-4 1-2.5m-1 19.5 1 2.5m-8-2.5-1 2.5m-4-7.5-2.5 1m7.5-13L7.5 1"
  }));
});
SettingsOption.displayName = 'SettingsOption';
export { SettingsOption };