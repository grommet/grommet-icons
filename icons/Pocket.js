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
    d: "M12 2H2a2 2 0 0 0-2 2v8c0 5.982 6 11 12 11s12-5.018 12-11V4a2 2 0 0 0-2-2H12z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    d: "m6 9 6.404 6L18 9"
  })));
};

exports.Pocket = Pocket;