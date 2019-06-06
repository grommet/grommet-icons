"use strict";

exports.__esModule = true;
exports.Coffee = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Coffee = function Coffee(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Coffee"
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "rotate(35 6.328 18.929)"
  }, _react["default"].createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    d: "M7,20 C12,20 14,15 14,10 C14,5 12,0 7,0 C2,8.74747714e-16 0,5 0,10 C2.1431319e-16,15 2,20 7,20 Z"
  }), _react["default"].createElement("path", {
    fill: "#000",
    d: "M7,2 C6,3 4,7 6,10 C8,13 7.5,17 7,18 C8.5,17 10,13 8,10 C6,7 6.5,3 7,2 Z"
  })));
};

exports.Coffee = Coffee;