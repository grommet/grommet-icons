function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Sans = function Sans(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sans"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 1C0.89543 1 0 1.89543 0 3V21C0 22.1046 0.895431 23 2 23H22C23.1046 23 24 22.1046 24 21V3C24 1.89543 23.1046 1 22 1H2ZM2 3L22 3V11H2V3ZM2 13V21H22V13H2ZM5 5C3.89543 5 3 5.89543 3 7C3 8.10457 3.89543 9 5 9C6.10457 9 7 8.10457 7 7C7 5.89543 6.10457 5 5 5ZM3 17C3 15.8954 3.89543 15 5 15C6.10457 15 7 15.8954 7 17C7 18.1046 6.10457 19 5 19C3.89543 19 3 18.1046 3 17Z",
    fill: "#000"
  }));
};