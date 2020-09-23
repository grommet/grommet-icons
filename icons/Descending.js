"use strict";

exports.__esModule = true;
exports.Descending = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Descending = function Descending(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Descending"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9191 16.7136L11.5655 17.0671L11.212 16.7136L7 12.5016L7.70711 11.7945L11.0655 15.1529V7.00009H12.0655V15.1529L15.4239 11.7945L16.1311 12.5016L11.9191 16.7136Z",
    fill: "#000"
  }));
};

exports.Descending = Descending;