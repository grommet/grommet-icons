"use strict";

exports.__esModule = true;
exports.StatusDisabledSmall = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusDisabledSmall = function StatusDisabledSmall(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusDisabledSmall"
  }, props), _react.default.createElement("rect", {
    width: "10",
    height: "10",
    x: "1",
    y: "1",
    fillRule: "evenodd",
    stroke: "#000",
    rx: "1"
  }));
};

exports.StatusDisabledSmall = StatusDisabledSmall;