"use strict";

exports.__esModule = true;
exports.Vulnerability = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Vulnerability = function Vulnerability(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Vulnerability"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,0 L12,24 L12,0 Z M0,12 L24,12 L0,12 Z M17,12 C17,9.243 14.757,7 12,7 C9.243,7 7,9.243 7,12 C7,14.757 9.243,17 12,17 C14.757,17 17,14.757 17,12 L17,12 Z M12,21 C7.038,21 3,16.963 3,12 C3,7.037 7.038,3 12,3 C16.962,3 21,7.037 21,12 C21,16.963 16.962,21 12,21 L12,21 Z"
  }));
};

exports.Vulnerability = Vulnerability;