"use strict";

exports.__esModule = true;
exports.Indicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Indicator = function Indicator(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Indicator"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,11 C13.6568542,11 15,9.65685425 15,8 C15,6.34314575 13.6568542,5 12,5 C10.3431458,5 9,6.34314575 9,8 C9,9.65685425 10.3431458,11 12,11 Z M19,8 C19,4.13400675 15.8659932,1 12,1 C8.13400675,1 5,4.13400675 5,8 C5,9.93299662 5.5,11 7,13 C8.5,15 10,16.5 10,19 L10,23 L14,23 L14,19 C14,16.5 15.5,15 17,13 C18.5,11 19,9.93299662 19,8 Z"
  }));
};

exports.Indicator = Indicator;