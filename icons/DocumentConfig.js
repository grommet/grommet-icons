"use strict";

exports.__esModule = true;
exports.DocumentConfig = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DocumentConfig = function DocumentConfig(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentConfig"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L16,23 M18,1 L18,6 L23,6 M9,14 L9,11 M9,20 C10.6568542,20 12,18.6568542 12,17 C12,15.3431458 10.6568542,14 9,14 C7.34314575,14 6,15.3431458 6,17 C6,18.6568542 7.34314575,20 9,20 Z M9,23 L9,20 M12,17 L15,17 M3,17 L6,17 M5,13 L7,15 M11,19 L13,21 M13,13 L11,15 M7,19 L5,21"
  }));
};

exports.DocumentConfig = DocumentConfig;