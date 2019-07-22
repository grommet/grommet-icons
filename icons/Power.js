"use strict";

exports.__esModule = true;
exports.Power = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Power = function Power(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Power"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16,4 C19.3637732,5.43018182 22,8.98935065 22,13 C22,18.6008831 17.5273457,23 12,23 C6.47265429,23 2,18.6008831 2,13 C2,8.98935065 4.63622679,5.43018182 8,4 M12,1 L12,11"
  }));
};

exports.Power = Power;