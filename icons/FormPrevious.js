"use strict";

exports.__esModule = true;
exports.FormPrevious = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormPrevious = function FormPrevious(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormPrevious"
  }, props), /*#__PURE__*/_react["default"].createElement("polyline", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    points: "9 6 15 12 9 18",
    transform: "matrix(-1 0 0 1 24 0)"
  }));
};

exports.FormPrevious = FormPrevious;