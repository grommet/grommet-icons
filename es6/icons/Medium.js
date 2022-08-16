function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Medium = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Medium"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#444",
    d: "M2.846 5.887a.93.93 0 0 0-.303-.784l-2.24-2.7V2H7.26l5.378 11.795L17.367 2H24v.403L22.084 4.24a.56.56 0 0 0-.213.538v13.498a.56.56 0 0 0 .213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537V7.32l-5.39 13.688h-.727L4.28 7.32v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V5.887z"
  }));
});
Medium.displayName = 'Medium';
export { Medium };