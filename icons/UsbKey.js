"use strict";

exports.__esModule = true;
exports.UsbKey = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UsbKey = function UsbKey(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UsbKey"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6C1.34315 6 0 7.34315 0 9V14C0 15.6569 1.34315 17 3 17H16H17V16H23H24V15V8V7H23H17V6H16H3ZM17 9V14H22V9H17ZM15 15V8H3C2.44772 8 2 8.44772 2 9V14C2 14.5523 2.44772 15 3 15H15ZM19 11.0078H19.5H19.51H20.01V10.5078V10.4978V9.99781H19.51H19.5H19V10.4978V10.5078V11.0078ZM19.51 13.0078H19.01V12.5078V12.4978V11.9978H19.51H19.52H20.02V12.4978V12.5078V13.0078H19.52H19.51Z",
    fill: "#000"
  }));
};

exports.UsbKey = UsbKey;