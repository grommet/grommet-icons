"use strict";

exports.__esModule = true;
exports.DriveCage = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DriveCage = function DriveCage(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DriveCage"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 23V2h22v21M1 8h22H1zm0 6h22H1zm0 6h22H1zM4 5h12H4zm14 0h2-2zm0 6h2-2zm0 6h2-2zM4 11h12H4zm0 6h12H4z"
  }));
};

exports.DriveCage = DriveCage;