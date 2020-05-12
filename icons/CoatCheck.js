"use strict";

exports.__esModule = true;
exports.CoatCheck = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CoatCheck = function CoatCheck(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CoatCheck"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12,11 L22.1551134,17.4623449 C22.6217314,17.7592836 23,18.4433532 23,19.0093689 L23,20.9906311 C23,21.5480902 22.5605417,22 21.9975383,22 L2.00246167,22 C1.44881738,22 1,21.5566468 1,20.9906311 L1,19.0093689 C1,18.4519098 1.3786449,17.7590442 1.84488659,17.4623449 L12,11 Z M15,5 C15,3.34314575 13.6568542,2 12,2 C10.3431458,2 9,3.34314575 9,5 C9,5.93157601 9.41137234,6.80169553 10.0908534,7.31422922 C11,8 12,8 12,9.5 L12,11"
  }));
};

exports.CoatCheck = CoatCheck;