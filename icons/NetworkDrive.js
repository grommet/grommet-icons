"use strict";

exports.__esModule = true;
exports.NetworkDrive = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var NetworkDrive = function NetworkDrive(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "NetworkDrive"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V12C23 13.1046 22.1046 14 21 14H13V16.1707C14.1652 16.5825 15 17.6938 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.6938 9.83481 16.5825 11 16.1707V14H3C1.89543 14 1 13.1046 1 12V6ZM11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19ZM3 6L3 12H21V6H3ZM6 7C4.89543 7 4 7.89543 4 9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 7.89543 7.10457 7 6 7Z",
    fill: "#000"
  }));
};

exports.NetworkDrive = NetworkDrive;