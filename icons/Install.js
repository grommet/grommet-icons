"use strict";

exports.__esModule = true;
exports.Install = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Install = function Install(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Install"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 13.5v4L12 22l-7-4.5v-4m7 8.5v-8.5m6.5-5-6.5-4L15.5 2 22 6l-3.5 2.5zm-13 0 6.5-4L8.5 2 2 6l3.5 2.5zm13 .5L12 13l3.5 2.5 6.5-4L18.5 9zm-13 0 6.5 4-3.5 2.5-6.5-4L5.5 9z"
  }));
};

exports.Install = Install;