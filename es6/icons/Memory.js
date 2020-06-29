function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Memory = function Memory(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Memory"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3C3.89543 3 3 3.89543 3 5H1V7H3V9H1V11H3V13H1V15H3V17H1V19H3C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19H13C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19H23V17H21V15H23V13H21V11H23V9H21V7H23V5H21C21 3.89543 20.1046 3 19 3H15C13.8954 3 13 3.89543 13 5H11C11 3.89543 10.1046 3 9 3H5ZM11 7V9H13V7H11ZM11 11V13H13V11H11ZM11 15V17H13V15H11ZM5 5H9V19H5V5ZM15 5H19V19H15V5Z",
    fill: "#000"
  }));
};