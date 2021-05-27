"use strict";

exports.__esModule = true;
exports.Risk = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Risk = function Risk(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Risk"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 10h1V9h-1v1zm4 0h1V9h-1v1zm0-4h1V5h-1v1zm-4 0h1V5h-1v1zM9 19h1v-1H9v1zm-4-4h1v-1H5v1zm5-5H1v13h13v-9m-4 0h13V1H10v13z"
  }));
};

exports.Risk = Risk;