"use strict";

exports.__esModule = true;
exports.Microfocus = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Microfocus = function Microfocus(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Microfocus"
  }, props), _react["default"].createElement("path", {
    fill: "#0078EF",
    fillRule: "evenodd",
    d: "M1,5 L5,5 L5,19 L19,19 L19,23 L1,23 L1,5 Z M5,1 L23,1 L23,19 L19,19 L19,5 L5,5 L5,1 Z"
  }));
};

exports.Microfocus = Microfocus;