"use strict";

exports.__esModule = true;
exports.ChapterAdd = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ChapterAdd = function ChapterAdd(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ChapterAdd"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5,14 L5,5 L19,5 L19,20 L11,20 M19,16 L23,16 L23,1 L9,1 L9,5 M5,16 L5,24 M9,20 L1,20"
  }));
};

exports.ChapterAdd = ChapterAdd;