"use strict";

exports.__esModule = true;
exports.Atm = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Atm = function Atm(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Atm"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 10H1V6h22v4h-3M6 6h12v14.006A2.003 2.003 0 0 1 15.991 22H8.01A2.002 2.002 0 0 1 6 20.006V6zm7 12h3m-3-3h3m-3-3h3m-6 10V6M3 2h3m2 0h3m2 0h3m2 0h3"
  }));
};

exports.Atm = Atm;