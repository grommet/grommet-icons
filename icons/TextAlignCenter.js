"use strict";

exports.__esModule = true;
exports.TextAlignCenter = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextAlignCenter = function TextAlignCenter(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextAlignCenter"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M.46 3.06h23.08v2.18H.46zM4.1 8.29h15.81v2.18H4.1zM.46 13.53h23.08v2.18H.46zm3.64 5.23h15.81v2.18H4.1z"
  }));
};

exports.TextAlignCenter = TextAlignCenter;