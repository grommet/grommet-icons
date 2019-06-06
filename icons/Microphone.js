"use strict";

exports.__esModule = true;
exports.Microphone = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Microphone = function Microphone(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Microphone"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8,11 C8,14 9.790861,15 12,15 C14.209139,15 16,14 16,11 L16,5 C16,2 14.209139,1 12,1 C9.790861,1 8,2 8,5 L8,11 Z M4,9 L4,11 C4,16 7.581722,19 12,19 C16.418278,19 20,16 20,11 L20,9 M12,24 L12,19"
  }));
};

exports.Microphone = Microphone;