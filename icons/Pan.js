"use strict";

exports.__esModule = true;
exports.Pan = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Pan = function Pan(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pan"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8.5,5.5 L12,2 L15.5,5.5 M22,12 L2,12 M5.5,8.5 L2,12 L5.5,15.5 M18.5,15.5 L22,12 L18.5,8.5 M12,22 L12,2 M8.5,18.5 L12,22 L15.5,18.5"
  }));
};

exports.Pan = Pan;