"use strict";

exports.__esModule = true;
exports.AssistListening = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AssistListening = function AssistListening(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "AssistListening"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11,21 C11.7572165,21.6666667 12.4238831,22 13,22 C15,22 16,21 16,19 C16,17.6666667 16.6666667,16.3333333 18,15 C19.2667508,13.7332492 20,11.9329966 20,10 C20,6.13400675 16.8659932,3 13,3 C9.13400675,3 6,6.13400675 6,10 M17,10 C17,7.790861 15.209139,6 13,6 C10.790861,6 9,7.790861 9,10 M3,20 L8,14 L9,18 L14,12"
  }));
};

exports.AssistListening = AssistListening;