"use strict";

exports.__esModule = true;
exports.Figma = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Figma = function Figma(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Figma"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(4)"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    fill: "#19BCFE"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#09CF83",
    d: "M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#A259FF",
    d: "M4 16h4V8H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F24E1E",
    d: "M4 8h4V0H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FF7262",
    d: "M12 8H8V0h4a4 4 0 1 1 0 8z"
  })));
};

exports.Figma = Figma;