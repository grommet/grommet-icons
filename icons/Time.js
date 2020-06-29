"use strict";

exports.__esModule = true;
exports.Time = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Time = function Time(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Time"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 13H5L7.5 4L12.5 20.5L17 9L19 13H23",
    stroke: "#000",
    strokeWidth: "2"
  }));
};

exports.Time = Time;