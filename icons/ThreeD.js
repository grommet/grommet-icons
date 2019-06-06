"use strict";

exports.__esModule = true;
exports.ThreeD = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ThreeD = function ThreeD(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ThreeD"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,5.5 L2,18.5 L12,22.5 L22,18.5 L22,5.5 L12,1.5 L2,5.5 Z M13,12 L18,12 L18,17 M2,5.5 L12,9.5 L22,5.5 M6,14 C6,14 12,20.5 18,12"
  }));
};

exports.ThreeD = ThreeD;