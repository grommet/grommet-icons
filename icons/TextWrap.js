"use strict";

exports.__esModule = true;
exports.TextWrap = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextWrap = function TextWrap(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextWrap"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17,10 L24,10 L17,10 L17,10 Z M1,14 L14,14 L14,2 L1,2 L1,14 Z M6,6 C6,6.5525 5.5525,7 5,7 C4.4475,7 4,6.5525 4,6 C4,5.4475 4.4475,5 5,5 C5.5525,5 6,5.4475 6,6 M17,6 L24,6 L17,6 L17,6 Z M17,2 L24,2 L17,2 L17,2 Z M17,14 L24,14 L17,14 L17,14 Z M0,18 L24,18 L0,18 L0,18 Z M0,22 L24,22 L0,22 L0,22 Z M14,14 L14,13 L10,8 L7,11 L6,10 L2,14 L14,14 Z"
  }));
};

exports.TextWrap = TextWrap;