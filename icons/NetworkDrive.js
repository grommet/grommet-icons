"use strict";

exports.__esModule = true;
exports.NetworkDrive = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var NetworkDrive = function NetworkDrive(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "NetworkDrive"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8v2.17a3.001 3.001 0 1 1-2 0V14H3a2 2 0 0 1-2-2V6zm10 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM3 6v6h18V6H3zm3 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
    fill: "#000"
  }));
};

exports.NetworkDrive = NetworkDrive;