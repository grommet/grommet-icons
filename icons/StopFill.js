"use strict";

exports.__esModule = true;
exports.StopFill = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StopFill = function StopFill(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StopFill"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4,4 L20,4 L20,20 L4,20 L4,4 Z M6,6 L18,6 L18,18 L6,18 L6,6 Z M8,8 L16,8 L16,16 L8,16 L8,8 Z M10,10 L14,10 L14,14 L10,14 L10,10 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z"
  }));
};

exports.StopFill = StopFill;