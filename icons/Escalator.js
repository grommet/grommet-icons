"use strict";

exports.__esModule = true;
exports.Escalator = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Escalator = function Escalator(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Escalator"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M22,9 C22,7.8954305 21.1017394,7 20.0020869,7 L16,7 L6,17 L4,17 C2.8954305,17 2,17.8877296 2,19 L2,19 C2,20.1045695 2.89826062,21 3.99791312,21 L8,21 L18,11 L20,11 C21.1045695,11 22,10.1122704 22,9 L22,9 Z M7,9 C7.55228475,9 8,8.55228475 8,8 C8,7.44771525 7.55228475,7 7,7 C6.44771525,7 6,7.44771525 6,8 C6,8.55228475 6.44771525,9 7,9 Z M7,15 L7,12.495389 C7,12.2217932 7.23193359,12 7.5,12 L7.5,12 C7.77614237,12 8,12.214035 8,12.5046844 L8,14 L7,15 Z M12,4 C12.5522847,4 13,3.55228475 13,3 C13,2.44771525 12.5522847,2 12,2 C11.4477153,2 11,2.44771525 11,3 C11,3.55228475 11.4477153,4 12,4 Z M12,10 L12,7.49538898 C12,7.2217932 12.2319336,7 12.5,7 L12.5,7 C12.7761424,7 13,7.21403503 13,7.50468445 L13,9 L12,10 Z"
  }));
};

exports.Escalator = Escalator;