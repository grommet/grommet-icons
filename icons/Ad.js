"use strict";

exports.__esModule = true;
exports.Ad = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Ad = function Ad(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ad"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 10h4v4h-4v-4zm4 8h-4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4m-4 8h-4a8 8 0 0 1-8-8v-4a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8v4"
  }));
};

exports.Ad = Ad;