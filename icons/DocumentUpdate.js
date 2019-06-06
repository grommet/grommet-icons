"use strict";

exports.__esModule = true;
exports.DocumentUpdate = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DocumentUpdate = function DocumentUpdate(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentUpdate"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.99787498,6.99999999 L2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L15,23 M16,1 L16,6 L21,6 M8,23 C11.8659932,23 15,19.8659932 15,16 C15,12.1340068 11.8659932,9 8,9 C4.13400675,9 1,12.1340068 1,16 C1,19.8659932 4.13400675,23 8,23 Z M4.5,16.5 L8,13 L11.5,16.5 M8,13.5 L8,20"
  }));
};

exports.DocumentUpdate = DocumentUpdate;