"use strict";

exports.__esModule = true;
exports.Ad = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Ad = function Ad(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ad"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10,10 L14,10 L14,14 L10,14 L10,10 Z M14,18 L10,18 C7.790861,18 6,16.209139 6,14 L6,10 C6,7.790861 7.790861,6 10,6 L10,6 L14,6 C16.209139,6 18,7.790861 18,10 L18,14 M14,22 L10,22 C5.581722,22 2,18.418278 2,14 L2,10 C2,5.581722 5.581722,2 10,2 L10,2 L14,2 C18.418278,2 22,5.581722 22,10 L22,14"
  }));
};

exports.Ad = Ad;