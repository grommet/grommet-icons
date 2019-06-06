"use strict";

exports.__esModule = true;
exports.PowerCycle = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PowerCycle = function PowerCycle(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PowerCycle"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20,8 C18.5343681,5.03213345 15.4860999,3 11.9637942,3 C7.01333514,3 3,7.02954545 3,12 M4,16 C5.4656319,18.9678666 8.51390007,21 12.0362058,21 C16.9866649,21 21,16.9704545 21,12 M9,16 L3,16 L3,22 M21,2 L21,8 L15,8"
  }));
};

exports.PowerCycle = PowerCycle;