"use strict";

exports.__esModule = true;
exports.Monospace = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Monospace = function Monospace(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Monospace"
  }, props), _react["default"].createElement("path", {
    d: "M11.88,17H9.58L8.65,14.1H4.44L3.57,17H1.32L5.41,4.17H7.66ZM8,11.93,6.52,7.17,5.09,11.93Z"
  }), _react["default"].createElement("path", {
    d: "M14.13,17,12.22,4.17h1.66L15.07,13l1.46-8.82h1.92l1.4,9,1.23-9h1.62L20.78,17H19.06l-1.6-9.6L15.88,17Z"
  }), _react["default"].createElement("polygon", {
    points: "11.36 17.95 11.36 19.34 1.89 19.34 1.89 17.95 1.38 17.95 1.38 19.86 1.64 19.86 1.89 19.86 11.36 19.86 11.87 19.86 11.87 19.86 11.87 17.95 11.36 17.95"
  }), _react["default"].createElement("polygon", {
    points: "22.17 18 22.17 19.39 12.69 19.39 12.69 18 12.19 18 12.19 19.91 12.45 19.91 12.69 19.91 22.17 19.91 22.67 19.91 22.68 19.91 22.68 18 22.17 18"
  }));
};

exports.Monospace = Monospace;