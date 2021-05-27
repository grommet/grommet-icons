"use strict";

exports.__esModule = true;
exports.StarHalf = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StarHalf = function StarHalf(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StarHalf"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    fillOpacity: ".2",
    d: "M12 16.667V2l2.5 7.5H22L16 14l3 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FFC95E",
    d: "M12 16.667 5 22l3-8-6-4.5h7.5L12 2z"
  })));
};

exports.StarHalf = StarHalf;