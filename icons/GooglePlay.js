"use strict";

exports.__esModule = true;
exports.GooglePlay = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GooglePlay = function GooglePlay(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlay"
  }, props), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("polygon", {
    stroke: "#444",
    strokeLinejoin: "round",
    strokeWidth: "2",
    points: "3 2 3 22 21 12"
  }), _react.default.createElement("path", {
    stroke: "#444",
    strokeWidth: "2",
    d: "M3,2 L14,16"
  }), _react.default.createElement("path", {
    stroke: "#444",
    strokeWidth: "2",
    d: "M3,8 L14,22",
    transform: "matrix(1 0 0 -1 0 30)"
  })));
};

exports.GooglePlay = GooglePlay;