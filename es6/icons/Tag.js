function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Tag = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Tag"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M11.706 22.294a.992.992 0 0 1-1.41.003l-8.593-8.594a1 1 0 0 1 .003-1.409L13 1h10v10L11.706 22.294zM6 12l6 6M9 9l6 6m2-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
  }));
});
Tag.displayName = 'Tag';
export { Tag };