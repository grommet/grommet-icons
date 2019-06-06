"use strict";

exports.__esModule = true;
exports.PersonalComputer = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PersonalComputer = function PersonalComputer(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PersonalComputer"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3,18 L21,18 L21,5 L21,5 C21,4.44771525 20.5522847,4 20,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,18 Z M2,20 L22,20 C23,20 23,19 23,19 L1,19 C1,19 1,20 2,20 Z"
  }));
};

exports.PersonalComputer = PersonalComputer;