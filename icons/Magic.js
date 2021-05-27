"use strict";

exports.__esModule = true;
exports.Magic = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Magic = function Magic(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Magic"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2.5 19.5 17-17 2 2-17 17-2-2zm.5.5L15 8l1 1L4 21l-1-1zM5.5 3l-.5.5.5.5.5-.5-.5-.5zm6 0-.5.5.5.5.5-.5-.5-.5zm-3 3-.5.5.5.5.5-.5-.5-.5zm12 6-.5.5.5.5.5-.5-.5-.5zm0 5-.5.5.5.5.5-.5-.5-.5z"
  }));
};

exports.Magic = Magic;