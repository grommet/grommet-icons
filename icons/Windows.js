"use strict";

exports.__esModule = true;
exports.Windows = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Windows = function Windows(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Windows"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#001589",
    fillRule: "evenodd",
    d: "M23.923 0 10.959 1.893v9.588l12.964-.102V0zM0 3.398l.009 8.155 9.773-.055-.004-9.432L0 3.398zm.008 17.283 9.773 1.344-.008-9.44-9.766-.063.001 8.159zm10.951 1.49L23.923 24l.004-11.326-12.986-.022.018 9.519z"
  }));
};

exports.Windows = Windows;