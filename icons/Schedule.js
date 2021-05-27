"use strict";

exports.__esModule = true;
exports.Schedule = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Schedule = function Schedule(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Schedule"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 23h22V4H1v19zM18 4V0v4zM6 4V0v4zM1 8.5h22H1zM6 14c.556-1.333 1.39-2 2.5-2 1.3 0 2 1 2 2s-1 2-2 3l-2 2v.5h5.405m5.08 1L17 12h-.5c-.5 1.5-2 2-2.743 2"
  }));
};

exports.Schedule = Schedule;