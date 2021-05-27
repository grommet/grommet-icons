"use strict";

exports.__esModule = true;
exports.Webcam = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Webcam = function Webcam(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Webcam"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 22H4",
    stroke: "#000",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5 18v3m-7.5.5V18",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M12 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    stroke: "#000",
    strokeWidth: "2"
  }));
};

exports.Webcam = Webcam;