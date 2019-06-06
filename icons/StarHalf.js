"use strict";

exports.__esModule = true;
exports.StarHalf = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StarHalf = function StarHalf(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StarHalf"
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("polygon", {
    fill: "#000",
    fillOpacity: ".2",
    points: "12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"
  }), _react["default"].createElement("polygon", {
    fill: "#FFC95E",
    points: "12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"
  })));
};

exports.StarHalf = StarHalf;