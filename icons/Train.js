"use strict";

exports.__esModule = true;
exports.Train = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Train = function Train(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Train"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5,1 L19,1 L19,1 C20.1045695,1 21,1.8954305 21,3 L21,18 L21,18 C21,19.1045695 20.1045695,20 19,20 L5,20 L5,20 C3.8954305,20 3,19.1045695 3,18 L3,3 L3,3 C3,1.8954305 3.8954305,1 5,1 Z M9,2 L15,2 M3,5 L21,5 M4,23 L20,23 M3,12 L21,12 M7,17 C7.55228475,17 8,16.5522847 8,16 C8,15.4477153 7.55228475,15 7,15 C6.44771525,15 6,15.4477153 6,16 C6,16.5522847 6.44771525,17 7,17 Z M17,17 C17.5522847,17 18,16.5522847 18,16 C18,15.4477153 17.5522847,15 17,15 C16.4477153,15 16,15.4477153 16,16 C16,16.5522847 16.4477153,17 17,17 Z M12,5 L12,12 M9,20 L7,23 M15,20 L17,23"
  }));
};

exports.Train = Train;