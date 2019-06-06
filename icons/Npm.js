"use strict";

exports.__esModule = true;
exports.Npm = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Npm = function Npm(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Npm"
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("rect", {
    width: "24",
    height: "24",
    fill: "#D40001"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M16.7179487,7.92840493 L12.2051282,7.92840493 L12.2051282,20.2494172 L4,20.2494172 L4,3 L12.2051282,3 L20,3 L20,7.92840493 L20,20.2494172 L16.7179487,20.2494172 L16.7179487,7.92840493 Z"
  })));
};

exports.Npm = Npm;