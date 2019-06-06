"use strict";

exports.__esModule = true;
exports.Blog = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Blog = function Blog(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Blog"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5,16 C3.343,16 2,17.343 2,19 C2,20.657 3.343,22 5,22 C6.657,22 8,20.657 8,19 C8,17.343 6.657,16 5,16 L5,16 L5,16 Z M5,1 C14.925,1 23,9.075 23,19 L23,19 M18,19 C18,11.832 12.168,6 5,6 M13,19 C13,14.589 9.411,11 5,11 M2,11 L2,19 L2,19"
  }));
};

exports.Blog = Blog;