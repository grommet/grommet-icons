"use strict";

exports.__esModule = true;
exports.DocumentTest = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DocumentTest = function DocumentTest(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentTest"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 6V1H19.5L23 4.5V23h-3M18 1v5h5M6 9h8M8 9v4.5l-5 8V23h14v-1.581L12 13.5V9m-6.5 8.5s2 1.5 4.5 0 4.5 0 4.5 0"
  }));
};

exports.DocumentTest = DocumentTest;