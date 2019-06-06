"use strict";

exports.__esModule = true;
exports.FormCheckmark = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormCheckmark = function FormCheckmark(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormCheckmark"
  }, props), _react["default"].createElement("polyline", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    points: "6 13 10.2 16.6 18 7"
  }));
};

exports.FormCheckmark = FormCheckmark;