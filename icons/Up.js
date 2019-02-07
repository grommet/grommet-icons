"use strict";

exports.__esModule = true;
exports.Up = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Up = function Up(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Up"
  }, props), _react.default.createElement("polyline", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    points: "7.086 1.174 17.086 11.174 7.086 21.174",
    transform: "rotate(-89 12.086 11.174)"
  }));
};

exports.Up = Up;