"use strict";

exports.__esModule = true;
exports.Support = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Support = function Support(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Support"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.222 19.778c4.296 4.296 11.26 4.296 15.556 0 4.296-4.296 4.296-11.26 0-15.556-4.296-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.26 0 15.556zM6.343 21.9l4.243-4.242m-8.485 0 4.242-4.243m11.314-2.828 4.242-4.243m-8.485 0 4.243-4.242m-9.9 14.142a6 6 0 1 0 8.486-8.486 6 6 0 0 0-8.486 8.486zm-5.656-9.9 4.242 4.243m0-8.485 4.243 4.242m2.828 11.314 4.243 4.242m0-8.485 4.242 4.243"
  }));
};

exports.Support = Support;