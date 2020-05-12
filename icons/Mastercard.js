"use strict";

exports.__esModule = true;
exports.Mastercard = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Mastercard = function Mastercard(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Mastercard"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "7",
    cy: "12",
    r: "7",
    fill: "#EA001B"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "17",
    cy: "12",
    r: "7",
    fill: "#FFA200",
    fillOpacity: ".8"
  })));
};

exports.Mastercard = Mastercard;