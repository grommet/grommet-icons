"use strict";

exports.__esModule = true;
exports.Impact = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Impact = function Impact(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Impact"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M13,2 L22,6 L22,17 L13,22 L13,2 Z M22,6 L13,11 L22,6 Z M9,22 L9,2 L9,22 Z M9,12 L3,5 L9,12 Z M9,12 L1,12 L9,12 Z M9,12 L3,19 L9,12 Z"
  }));
};

exports.Impact = Impact;