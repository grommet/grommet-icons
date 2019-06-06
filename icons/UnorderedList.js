"use strict";

exports.__esModule = true;
exports.UnorderedList = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UnorderedList = function UnorderedList(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UnorderedList"
  }, props), _react["default"].createElement("rect", {
    x: "5.94",
    y: "6.42",
    width: "18.06",
    height: "1.75"
  }), _react["default"].createElement("rect", {
    x: "5.94",
    y: "11.71",
    width: "18.06",
    height: "1.75"
  }), _react["default"].createElement("rect", {
    x: "5.94",
    y: "16.99",
    width: "18.06",
    height: "1.75"
  }), _react["default"].createElement("circle", {
    cx: "1.85",
    cy: "7.29",
    r: "1.52"
  }), _react["default"].createElement("circle", {
    cx: "1.85",
    cy: "12.58",
    r: "1.52"
  }), _react["default"].createElement("circle", {
    cx: "1.85",
    cy: "17.87",
    r: "1.52"
  }));
};

exports.UnorderedList = UnorderedList;