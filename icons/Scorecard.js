"use strict";

exports.__esModule = true;
exports.Scorecard = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Scorecard = function Scorecard(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Scorecard"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9,18 L9,12 M12,18 L12,13 M15,18 L15,10 M17,3 L21,3 L21,23 L3,23 L3,3 L7,3 M7,1 L17,1 L17,5 L7,5 L7,1 Z"
  }));
};

exports.Scorecard = Scorecard;