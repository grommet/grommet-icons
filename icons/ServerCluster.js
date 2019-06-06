"use strict";

exports.__esModule = true;
exports.ServerCluster = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ServerCluster = function ServerCluster(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ServerCluster"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1,8 L23,8 L23,1 L1,1 L1,8 Z M11,5 L12,5 L12,4 L11,4 L11,5 Z M19,5 L20,5 L20,4 L19,4 L19,5 Z M15,5 L16,5 L16,4 L15,4 L15,5 Z M11,12 L12,12 L12,11 L11,11 L11,12 Z M19,12 L20,12 L20,11 L19,11 L19,12 Z M15,12 L16,12 L16,11 L15,11 L15,12 Z M11,19 L12,19 L12,18 L11,18 L11,19 Z M19,19 L20,19 L20,18 L19,18 L19,19 Z M15,19 L16,19 L16,18 L15,18 L15,19 Z M1,15 L23,15 L23,8 L1,8 L1,15 Z M1,22 L23,22 L23,15 L1,15 L1,22 Z M21,23 L3,23"
  }));
};

exports.ServerCluster = ServerCluster;