"use strict";

exports.__esModule = true;
exports.DocumentCsv = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DocumentCsv = function DocumentCsv(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentCsv"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M7,13 C7,13 6.00000004,13 5,13 C3.99999996,13 3,13.5 3,14.5 L3,16 C3,16 3.00000001,16.5 3,17.5 C2.99999999,18.5 4,19 5,19 L7,19 M13.25,13 C13.25,13 12.25,13 10.75,13 C9.25,13 8.75,13.5 8.75,14.5 C8.75,15.5 9.25,16 10.75,16 C12.25,16 12.75,16.5 12.75,17.5 C12.75,18.5 12.25,19 10.75,19 C9.25,19 8.25,19 8.25,19 M20.5,12 C20.5,12 20.5,12 20.5,12.5 C20.5,13 18,19 18,19 L17.5,19 C17.5,19 15,13 15,12.5 L15,12"
  }));
};

exports.DocumentCsv = DocumentCsv;