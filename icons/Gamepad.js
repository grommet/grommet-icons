"use strict";

exports.__esModule = true;
exports.Gamepad = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Gamepad = function Gamepad(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gamepad"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 6V2m0 4c2.498.044 4.006 0 5 0 2 0 4 .5 5 4s1 5.5 1 8-2 3-4 3-3.054-4-7-4-5 4-7 4-4-.5-4-3 0-4.5 1-8 3-4 5-4c.994 0 2.502.044 5 0zm6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 12h6M7 9v6"
  }));
};

exports.Gamepad = Gamepad;