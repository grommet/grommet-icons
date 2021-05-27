"use strict";

exports.__esModule = true;
exports.TestDesktop = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TestDesktop = function TestDesktop(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TestDesktop"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18.218 1H23v18H1V1h5m11 9c-4-3-6 3-10 0M5 23h14H5zm5-22v4.773l-5 7.182V15h14v-2.045l-5-7.182V1M8 1h8-8zm0 22h8v-4H8v4z"
  }));
};

exports.TestDesktop = TestDesktop;