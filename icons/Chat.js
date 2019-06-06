"use strict";

exports.__esModule = true;
exports.Chat = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Chat = function Chat(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Chat"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000000",
    strokeWidth: "2",
    d: "M5,1 L19,1 L19,1 C21.209139,1 23,2.790861 23,5 L23,13 L23,13 C23,15.209139 21.209139,17 19,17 L7,17 L1,22 L1,5 L1,5 C1,2.790861 2.790861,1 5,1 Z M5,7 L18,7 M5,11 L14,11",
    transform: "matrix(-1 0 0 1 24 0)"
  }));
};

exports.Chat = Chat;