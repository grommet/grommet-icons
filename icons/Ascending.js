"use strict";

exports.__esModule = true;
exports.Ascending = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Ascending = function Ascending(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ascending"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0809 7.28641L12.4345 6.93286L12.788 7.28641L17 11.4984L16.2929 12.2055L12.9345 8.84707V16.9999H11.9345V8.84707L8.57605 12.2055L7.86895 11.4984L12.0809 7.28641Z",
    fill: "#000"
  }));
};

exports.Ascending = Ascending;