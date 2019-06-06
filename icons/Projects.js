"use strict";

exports.__esModule = true;
exports.Projects = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Projects = function Projects(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Projects"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1,1 L9,1 L9,9 L1,9 L1,1 Z M15,1 L23,1 L23,9 L15,9 L15,1 Z M1,15 L9,15 L9,23 L1,23 L1,15 Z M15,15 L23,15 L23,23 L15,23 L15,15 Z"
  }));
};

exports.Projects = Projects;