"use strict";

exports.__esModule = true;
exports.StatusWarningSmall = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusWarningSmall = function StatusWarningSmall(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusWarningSmall"
  }, props), _react["default"].createElement("polygon", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeLinejoin: "round",
    points: "6 1 11 10 1 10"
  }));
};

exports.StatusWarningSmall = StatusWarningSmall;