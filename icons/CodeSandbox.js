"use strict";

exports.__esModule = true;
exports.CodeSandbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CodeSandbox = function CodeSandbox(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CodeSandbox"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#444",
    strokeWidth: "2",
    d: "m12 1.5-9 5v11l9 5 9-5v-11l-9-5zm0 21v-11m9-5-9 5m0 0-9-5m18 11V12l-4.5 2.5V20l4.5-2.5zm-18 0V12l4.5 2.5V20L3 17.5zm9-16L7.5 4 12 6.5 16.5 4 12 1.5z"
  }));
};

exports.CodeSandbox = CodeSandbox;