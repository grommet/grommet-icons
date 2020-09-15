"use strict";

exports.__esModule = true;
exports.CaretDownFill = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CaretDownFill = function CaretDownFill(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretDownFill"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 9H6L12 15L18 9Z",
    fill: "#000"
  }));
};

exports.CaretDownFill = CaretDownFill;