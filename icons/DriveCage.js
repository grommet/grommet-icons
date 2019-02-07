"use strict";

exports.__esModule = true;
exports.DriveCage = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DriveCage = function DriveCage(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DriveCage"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1,23 L1,2 L23,2 L23,23 M1,8 L23,8 L1,8 Z M1,14 L23,14 L1,14 Z M1,20 L23,20 L1,20 Z M4,5 L16,5 L4,5 Z M18,5 L20,5 L18,5 Z M18,11 L20,11 L18,11 Z M18,17 L20,17 L18,17 Z M4,11 L16,11 L4,11 Z M4,17 L16,17 L4,17 Z"
  }));
};

exports.DriveCage = DriveCage;