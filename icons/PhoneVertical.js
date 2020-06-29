"use strict";

exports.__esModule = true;
exports.PhoneVertical = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PhoneVertical = function PhoneVertical(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneVertical"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 23C18.1046 23 19 22.1046 19 21L19 3C19 1.89543 18.1046 1 17 1L7 0.999999C5.89543 0.999999 5 1.89543 5 3L5 21C5 22.1046 5.89543 23 7 23L17 23ZM11.0005 21L7 21L7 3L17 3L17 21L12.9995 21C12.9998 20.9896 13 20.9792 13 20.9687L13 19.9687C13 19.4165 12.5523 18.9687 12 18.9687C11.4477 18.9687 11 19.4165 11 19.9687L11 20.9687C11 20.9792 11.0002 20.9896 11.0005 21Z",
    fill: "#000"
  }));
};

exports.PhoneVertical = PhoneVertical;