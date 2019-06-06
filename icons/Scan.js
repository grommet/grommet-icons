"use strict";

exports.__esModule = true;
exports.Scan = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Scan = function Scan(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Scan"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20,14 L20,21 L4,21 L4,14 L4,14 M1,12 L23,12 L1,12 Z M4,11 L4,8 L4,11 Z M20,8 L20,11 L20,8 Z M7,3 L4,3 L4,6 M20,6 L20,3 L17,3 M9,3 L15,3 L9,3 Z",
    transform: "matrix(1 0 0 -1 0 24)"
  }));
};

exports.Scan = Scan;