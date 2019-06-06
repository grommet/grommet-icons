"use strict";

exports.__esModule = true;
exports.Attraction = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Attraction = function Attraction(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Attraction"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M13,2 L14.5,2.5 L13,3 L13,2 Z M14,18 L15,23 L13,23 L14,18 Z M14,16.5 L16,23 L12,23 L14,16.5 Z M12,6 L21,11 L21,13 L3,13 L3,11 L12,6 Z M4.5,13 L19.5,13 C19.5,17.1666667 21,23 21,23 L3,23 C3,23 4.5,17.1666667 4.5,13 Z M4.5,13 L19.5,13 C19.5,17.1666667 21,23 21,23 L3,23 C3,23 4.5,17.1666667 4.5,13 Z"
  }));
};

exports.Attraction = Attraction;