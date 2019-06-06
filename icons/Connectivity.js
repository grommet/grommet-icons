"use strict";

exports.__esModule = true;
exports.Connectivity = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Connectivity = function Connectivity(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Connectivity"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6,8 L6,12 L9,15 L15,9 L11,5 L5,5 L2.5,3 M17,7 L20,10 L20,17 M13,11 L16,14 M11,13 L14,16 M7,17 L10,20 L20,20"
  }));
};

exports.Connectivity = Connectivity;