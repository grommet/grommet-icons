"use strict";

exports.__esModule = true;
exports.Pocket = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Pocket = function Pocket(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pocket"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F50057",
    d: "M12,2 L2,2 C0.8954305,2 0,2.8954305 0,4 C0,7 0,9 0,12 C0,17.9821415 6,23 12,23 C18,23 24,17.9821415 24,12 C24,9 24,7 24,4 C24,2.8954305 23.1045695,2 22,2 L12,2 Z"
  }), /*#__PURE__*/_react["default"].createElement("polyline", {
    stroke: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    points: "6 9 12.404 15 18 9"
  })));
};

exports.Pocket = Pocket;