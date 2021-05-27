"use strict";

exports.__esModule = true;
exports.BusinessService = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BusinessService = function BusinessService(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BusinessService"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 23H1V5h22v18h-7M8 5V1h8v4M9 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.008 1.876a4 4 0 1 0-1.244-7.193m-5.062 5.043A4 4 0 0 0 10 23a4 4 0 0 0 1.401-7.748"
  }));
};

exports.BusinessService = BusinessService;