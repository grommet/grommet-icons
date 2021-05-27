"use strict";

exports.__esModule = true;
exports.PowerCycle = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PowerCycle = function PowerCycle(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PowerCycle"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 8a8.955 8.955 0 0 0-8.036-5C7.014 3 3 7.03 3 12m1 4a8.955 8.955 0 0 0 8.036 5C16.986 21 21 16.97 21 12M9 16H3v6M21 2v6h-6"
  }));
};

exports.PowerCycle = PowerCycle;