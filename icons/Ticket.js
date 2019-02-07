"use strict";

exports.__esModule = true;
exports.Ticket = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Ticket = function Ticket(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ticket"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7,16 L17,16 L17,8 L7,8 L7,16 Z M20,12 C20,14 21,15 23,15 L23,20 L1,20 L1,15 C3,15 4,14 4,12 C4,10 3,9 1,9 L1,4 L23,4 L23,9 C21,9 20,10 20,12 Z"
  }));
};

exports.Ticket = Ticket;