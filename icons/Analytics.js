"use strict";

exports.__esModule = true;
exports.Analytics = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Analytics = function Analytics(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Analytics"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20,7 C21.25,8.67 22,10.75 22,13 C22,18.52 17.52,23 12,23 C6.48,23 2,18.52 2,13 C2,7.48 6.48,3 12,3 M12,1 L12,13 L21.6,5.8 C19.41,2.89 15.92,1 12,1 L12,1 Z"
  }));
};

exports.Analytics = Analytics;