"use strict";

exports.__esModule = true;
exports.Sync = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Sync = function Sync(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sync"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5,19 L16,19 C19.866,19 23,15.866 23,12 L23,9 M8,15 L4,19 L8,23 M19,5 L8,5 C4.134,5 1,8.134 1,12 L1,15 M16,1 L20,5 L16,9"
  }));
};

exports.Sync = Sync;