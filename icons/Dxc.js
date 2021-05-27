"use strict";

exports.__esModule = true;
exports.Dxc = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Dxc = function Dxc(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Dxc"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "m12 14 4 7H8l4-7zm0-4L8 3h8l-4 7zM2 18H0V6h2a6 6 0 1 1 0 12zm20 0a6 6 0 1 1 0-12h2v12h-2z"
  }));
};

exports.Dxc = Dxc;