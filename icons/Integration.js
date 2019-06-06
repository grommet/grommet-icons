"use strict";

exports.__esModule = true;
exports.Integration = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Integration = function Integration(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Integration"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#231F20",
    strokeWidth: "2",
    d: "M5,21 L23,21 L23,9 L5,9 M19,15 L1,15 L1,3 L19,3"
  }));
};

exports.Integration = Integration;