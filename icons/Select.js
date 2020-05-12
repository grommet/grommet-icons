"use strict";

exports.__esModule = true;
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Select = function Select(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Select"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8,1 L14,1 L8,1 Z M19.188,19.472 L16,22 L12.5,17.5 L9.5,21 L7,7 L20,13.5 L15.5,15 L19.188,19.472 Z M19,4 L19,1 L16,1 M6,1 L3,1 L3,4 M3,14 L3,17 L6,17 M19,6 L19,10 L19,6 Z M3,12 L3,6 L3,12 Z"
  }));
};

exports.Select = Select;