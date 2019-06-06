"use strict";

exports.__esModule = true;
exports.TextAlignRight = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextAlignRight = function TextAlignRight(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextAlignRight"
  }, props), _react["default"].createElement("rect", {
    x: "0.46",
    y: "3.06",
    width: "23.08",
    height: "2.18"
  }), _react["default"].createElement("rect", {
    x: "7.73",
    y: "8.29",
    width: "15.81",
    height: "2.18"
  }), _react["default"].createElement("rect", {
    x: "0.46",
    y: "13.53",
    width: "23.08",
    height: "2.18"
  }), _react["default"].createElement("rect", {
    x: "7.73",
    y: "18.76",
    width: "15.81",
    height: "2.18"
  }));
};

exports.TextAlignRight = TextAlignRight;