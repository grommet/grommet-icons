"use strict";

exports.__esModule = true;
exports.TopCorner = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TopCorner = function TopCorner(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TopCorner"
  }, props), _react["default"].createElement("polyline", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    points: "4 16 16 16 16 4",
    transform: "rotate(180 10 10)"
  }));
};

exports.TopCorner = TopCorner;