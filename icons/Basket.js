"use strict";

exports.__esModule = true;
exports.Basket = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Basket = function Basket(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Basket"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,12 L22,12 L20,23 L4,23 L2,12 Z M20,8 L14,1 M4,8 L10,1 M1,8 L23,8 L23,12 L1,12 L1,8 Z M8,15 L8,20 M16,15 L16,20 M12,15 L12,20"
  }));
};

exports.Basket = Basket;