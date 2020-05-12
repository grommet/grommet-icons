"use strict";

exports.__esModule = true;
exports.Trophy = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Trophy = function Trophy(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Trophy"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,15 C8.686,15 6,12.314 6,9 L6,1 L18,1 L18,9 C18,12.314 15.314,15 12,15 Z M6,3 L1,3 L1,7 C1,9.509 2.791,11 5,11 L6,11 L6,3 Z M18,11 L19,11 C21.209,11 23,9.509 23,7 L23,3 L18,3 L18,11 Z M5,23 L19,23 L19,19 L5,19 L5,23 Z M16,19 C16,16.790861 14.209139,15 12,15 C9.790861,15 8,16.790861 8,19"
  }));
};

exports.Trophy = Trophy;