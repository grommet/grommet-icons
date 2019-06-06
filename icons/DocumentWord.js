"use strict";

exports.__esModule = true;
exports.DocumentWord = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DocumentWord = function DocumentWord(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentWord"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M14,12 L12.5,18.75 L12.25,18.75 L9.5,12 L9,12 L6.25,18.75 L6,18.75 L4.5,12 L4,12 L6,19 L6.5,19 L9,12.5 L9.5,12.5 L12,19 L12.5,19 L14.5,12 L14,12 Z"
  }));
};

exports.DocumentWord = DocumentWord;