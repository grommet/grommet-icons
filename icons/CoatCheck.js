"use strict";

exports.__esModule = true;
exports.CoatCheck = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CoatCheck = function CoatCheck(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CoatCheck"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 11 10.155 6.462c.467.297.845.981.845 1.547v1.982A1 1 0 0 1 21.998 22H2.002A1 1 0 0 1 1 20.99v-1.98c0-.558.379-1.251.845-1.548L12 11zm3-6a3 3 0 0 0-6 0c0 .932.411 1.802 1.09 2.314C11 8 12 8 12 9.5V11"
  }));
};

exports.CoatCheck = CoatCheck;