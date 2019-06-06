"use strict";

exports.__esModule = true;
exports.Capacity = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Capacity = function Capacity(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Capacity"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M1,19 L23,19 L23,5 L1,5 L1,19 Z M4,16 L7,16 L7,8 L4,8 L4,16 Z M10,16 L13,16 L13,8 L10,8 L10,16 Z"
  }));
};

exports.Capacity = Capacity;