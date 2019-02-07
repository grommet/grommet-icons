"use strict";

exports.__esModule = true;
exports.TreeOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TreeOption = function TreeOption(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TreeOption"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7,13 L11.375,6 L9,6 L12,2 L15,6 L12.625,6 L17,13 L15,13 L19,19.6666667 L5,19.6666667 L9,13 L7,13 Z M12,24 L12,20"
  }));
};

exports.TreeOption = TreeOption;