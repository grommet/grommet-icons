"use strict";

exports.__esModule = true;
exports.Search = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Search = function Search(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Search"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M15,15 L22,22 L15,15 Z M9.5,17 C13.6421356,17 17,13.6421356 17,9.5 C17,5.35786438 13.6421356,2 9.5,2 C5.35786438,2 2,5.35786438 2,9.5 C2,13.6421356 5.35786438,17 9.5,17 Z"
  }));
};

exports.Search = Search;