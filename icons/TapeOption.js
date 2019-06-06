"use strict";

exports.__esModule = true;
exports.TapeOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TapeOption = function TapeOption(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TapeOption"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1,2 L22,2 L22,22 L2,22 L2,7 M12,19 C8.13409091,19 5,15.8659091 5,12 M12,19 C15.8659091,19 19,15.8659091 19,12 C19,8.13409091 15.8659091,5 12,5 L1,5 M12,9 C10.3455,9 9,10.3455 9,12 C9,13.6545 10.3455,15 12,15 C13.6545,15 15,13.6545 15,12 C15,10.3455 13.6545,9 12,9 Z"
  }));
};

exports.TapeOption = TapeOption;