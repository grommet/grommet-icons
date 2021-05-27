"use strict";

exports.__esModule = true;
exports.Calculator = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Calculator = function Calculator(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Calculator"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 23H2V1h20v22zm-6-6h2v2h-2v-2zm-5 0h2v2h-2v-2zm5-5h2v2h-2v-2zm-5 0h2v2h-2v-2zm-5 5h2v2H6v-2zm0-5h2v2H6v-2zm12-3H6V5h12v4z"
  }));
};

exports.Calculator = Calculator;