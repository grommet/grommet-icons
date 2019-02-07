"use strict";

exports.__esModule = true;
exports.DocumentImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DocumentImage = function DocumentImage(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentImage"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L19.9999998,23 M18,1 L18,6 L23,6 M3,11 L16,11 L16,23 L3,23 L3,11 Z M7,16 C7.55228475,16 8,15.5522847 8,15 C8,14.4477153 7.55228475,14 7,14 C6.44771525,14 6,14.4477153 6,15 C6,15.5522847 6.44771525,16 7,16 Z M5,23 L7,20 L9,22 L13,16 L16,20"
  }));
};

exports.DocumentImage = DocumentImage;