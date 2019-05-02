"use strict";

exports.__esModule = true;
exports.Clone = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Clone = function Clone(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Clone"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7,23 L23,23 L23,7 L7,7 L7,23 Z M17,3.9997 L17,0.9997 L14,0.9997 M1,13.9997 L1,16.9997 L4,16.9997 M1,11.9997 L1,5.9997 L1,11.9997 Z M4,0.9997 L1,0.9997 L1,3.9997 M6,0.9997 L12,0.9997 L6,0.9997 Z"
  }));
};

exports.Clone = Clone;