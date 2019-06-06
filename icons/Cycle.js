"use strict";

exports.__esModule = true;
exports.Cycle = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Cycle = function Cycle(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cycle"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M13,20 C19,19 21,14 21,10 M14,16 L12,20 L16,23 M0,9 L4,6 L7,10 M9.00000008,20 C3,17 2.00000006,12 3.99999998,6 M20,6.99999999 C16,0.99999995 10,1 6,4.00609254 M20,2 L20,7 L15,7"
  }));
};

exports.Cycle = Cycle;