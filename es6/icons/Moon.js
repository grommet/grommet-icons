function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Moon = function Moon(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Moon"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.2494 18.7793L18.7813 19.6261C19.1196 19.4136 19.299 19.0202 19.2375 18.6255C19.1761 18.2308 18.8856 17.9105 18.4988 17.8109L18.2494 18.7793ZM18.2494 5.22068L18.4988 6.18909C18.8856 6.08949 19.1761 5.76921 19.2375 5.37449C19.299 4.97978 19.1196 4.58636 18.7813 4.37388L18.2494 5.22068ZM14 21C15.755 21 17.3954 20.4967 18.7813 19.6261L17.7175 17.9325C16.641 18.6088 15.3677 19 14 19V21ZM5 12C5 16.9706 9.02944 21 14 21V19C10.134 19 7 15.866 7 12H5ZM14 3C9.02944 3 5 7.02944 5 12H7C7 8.13401 10.134 5 14 5V3ZM18.7813 4.37388C17.3954 3.50331 15.755 3 14 3V5C15.3677 5 16.641 5.39124 17.7175 6.06748L18.7813 4.37388ZM18.0001 4.25226C14.5502 5.14052 12 8.27118 12 12H14C14 9.20579 15.911 6.85538 18.4988 6.18909L18.0001 4.25226ZM12 12C12 15.7288 14.5502 18.8595 18.0001 19.7477L18.4988 17.8109C15.911 17.1446 14 14.7942 14 12H12Z",
    fill: "#000"
  }));
};