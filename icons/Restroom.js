"use strict";

exports.__esModule = true;
exports.Restroom = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Restroom = function Restroom(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Restroom"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M6,11 L18,11 M6,3 L18,3 M12,16 C14.7614237,16 17,13.7614237 17,11 C17,11 7,11 7,11 C7,13.7614237 9.23857625,16 12,16 Z M7,3 L17,3 L17,11 L7,11 L7,3 Z M7,6 L9.5,6 M14.5,15.5 L16,21.5 L8,21.5 L9.5,15.5"
  }));
};

exports.Restroom = Restroom;