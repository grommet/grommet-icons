"use strict";

exports.__esModule = true;
exports.BusinessService = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BusinessService = function BusinessService(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BusinessService"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4,23 L1,23 L1,5 L1,5 L23,5 L23,23 L16,23 M8,5 L8,1 L8,1 L16,1 L16,5 M9,16 C11.209139,16 13,14.209139 13,12 C13,9.790861 11.209139,8 9,8 C6.790861,8 5,9.790861 5,12 C5,14.209139 6.790861,16 9,16 Z M14.0084967,17.8761594 C14.3255566,17.9570186 14.6577589,18 15,18 C17.209139,18 19,16.209139 19,14 C19,11.790861 17.209139,10 15,10 C14.1717747,10 13.4023412,10.2517171 12.7640287,10.6828219 M7.70199467,15.7255728 C6.67265121,16.4493031 6,17.6460985 6,19 C6,21.209139 7.790861,23 10,23 L10,23 C12.209139,23 14,21.209139 14,19 C14,17.2838286 12.9192205,15.8200868 11.4011657,15.2522789"
  }));
};

exports.BusinessService = BusinessService;