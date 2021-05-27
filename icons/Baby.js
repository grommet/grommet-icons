"use strict";

exports.__esModule = true;
exports.Baby = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Baby = function Baby(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Baby"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 15h4s-1 1.5-2 1.5-2-1.5-2-1.5zm2-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 6-4-3m0 6 3 2.5-2.5 2.5M6 12l4-3m0 6-2.5 2.75L10 20m0-11h4v3h-4V9z"
  }));
};

exports.Baby = Baby;