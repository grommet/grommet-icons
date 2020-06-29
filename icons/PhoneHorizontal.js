"use strict";

exports.__esModule = true;
exports.PhoneHorizontal = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PhoneHorizontal = function PhoneHorizontal(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneHorizontal"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23 7C23 5.89543 22.1046 5 21 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V7ZM21 12.9957V17H3V7H21V11.0043C20.9691 11.0015 20.9379 11 20.9062 11H19.9062C19.354 11 18.9062 11.4477 18.9062 12C18.9062 12.5523 19.354 13 19.9062 13H20.9062C20.9379 13 20.9691 12.9985 21 12.9957Z",
    fill: "#000"
  }));
};

exports.PhoneHorizontal = PhoneHorizontal;