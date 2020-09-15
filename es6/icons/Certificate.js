function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Certificate = function Certificate(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Certificate"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 0H2H18H19V1V4.08296C21.8377 4.55904 24 7.027 24 10C24 11.777 23.2275 13.3736 22 14.4722V22V23.8685L20.4453 22.8321L18 21.2019L15.5547 22.8321L14 23.8685V22V20H2H1V19V1V0ZM14 18V14.4722C12.7725 13.3736 12 11.777 12 10C12 7.027 14.1623 4.55904 17 4.08296V2H3V18H14ZM16 15.6586V20.1315L17.4453 19.1679L18 18.7981L18.5547 19.1679L20 20.1315V15.6586C19.3744 15.8797 18.7013 16 18 16C17.2987 16 16.6256 15.8797 16 15.6586ZM18 6C15.7909 6 14 7.79086 14 10C14 12.2091 15.7909 14 18 14C20.2091 14 22 12.2091 22 10C22 7.79086 20.2091 6 18 6ZM11 9.00001H5V7.00001H11V9.00001ZM5 12H10V10H5V12ZM7 15H5V13H7V15ZM5 6.00001H7V4.00001H5V6.00001Z",
    fill: "#000"
  }));
};