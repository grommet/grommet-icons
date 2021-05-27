"use strict";

exports.__esModule = true;
exports.TextWrap = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextWrap = function TextWrap(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextWrap"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 10h7-7zM1 14h13V2H1v12zm5-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m11 0h7-7zm0-4h7-7zm0 12h7-7zM0 18h24H0zm0 4h24H0zm14-8v-1l-4-5-3 3-1-1-4 4h12z"
  }));
};

exports.TextWrap = TextWrap;