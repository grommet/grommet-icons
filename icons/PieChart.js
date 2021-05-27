"use strict";

exports.__esModule = true;
exports.PieChart = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PieChart = function PieChart(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PieChart"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 23a9 9 0 0 1 0-18v9l1.162 1.162 5.202 5.202A8.972 8.972 0 0 1 10 23zm4-13V1a9 9 0 0 1 9 9h-9zm0 3h8a8.964 8.964 0 0 1-2.107 5.787L14 13z"
  }));
};

exports.PieChart = PieChart;