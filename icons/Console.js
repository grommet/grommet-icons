"use strict";

exports.__esModule = true;
exports.Console = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Console = function Console(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Console"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17ZM8.70709 7.29288C8.31656 6.90236 7.6834 6.90238 7.29288 7.29291C6.90236 7.68344 6.90238 8.3166 7.29291 8.70712L9.58588 11L7.29291 13.2929C6.90238 13.6834 6.90236 14.3166 7.29288 14.7071C7.6834 15.0976 8.31656 15.0976 8.70709 14.7071L11.7072 11.7071C11.8948 11.5196 12.0001 11.2652 12.0001 11C12.0001 10.7348 11.8948 10.4804 11.7072 10.2929L8.70709 7.29288Z",
    fill: "#000"
  }));
};

exports.Console = Console;