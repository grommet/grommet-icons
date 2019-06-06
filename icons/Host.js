"use strict";

exports.__esModule = true;
exports.Host = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Host = function Host(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Host"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17,4 L18,4 L18,5 L17,5 L17,4 Z M3,1 L21,1 L21,23 L3,23 L3,1 Z M3,13 L21,13 L3,13 Z M3,18 L21,18 L3,18 Z M3,8 L21,8 L3,8 Z"
  }));
};

exports.Host = Host;