"use strict";

exports.__esModule = true;
exports.Notification = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Notification = function Notification(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Notification"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4,19 L4,9 C4,4.582 7.582,1 12,1 C16.418,1 20,4.582 20,9 L20,19 M1,19 L23,19 M15,19 L15,20 C15,21.657 13.657,23 12,23 C10.343,23 9,21.657 9,20 L9,19"
  }));
};

exports.Notification = Notification;