"use strict";

exports.__esModule = true;
exports.Pocket = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Pocket = function Pocket(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pocket"
  }, props), _react["default"].createElement("path", {
    fill: "#fff",
    d: "M388.8 88.9H123.2A47.4 47.4 0 0 0 76 136.5v131.9c0 2.4.2 4.8.5 7.2a101.8 101.8 0 0 0-.5 10.6c0 75.6 80.6 137 180 137s180-61.4 180-137c0-3.6-.2-7.1-.5-10.6.3-2.4.5-4.8.5-7.2v-132A47.4 47.4 0 0 0 388.8 89zm-22.4 132.6l-93 93c-4.7 4.6-11 7-17.1 7a23.8 23.8 0 0 1-17.7-7l-93-93a24 24 0 0 1 33.8-33.8l76.6 76.5 76.6-76.5a24 24 0 0 1 33.8 33.8z"
  }));
};

exports.Pocket = Pocket;