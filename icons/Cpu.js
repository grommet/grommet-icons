"use strict";

exports.__esModule = true;
exports.Cpu = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Cpu = function Cpu(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cpu"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 3H7V1H5V3C3.89543 3 3 3.89543 3 5H1V7H3V9H1V11H3V13H1V15H3V17H1V19H3C3 20.1046 3.89543 21 5 21V23H7V21H9V23H11V21H13V23H15V21H17V23H19V21C20.1046 21 21 20.1046 21 19H23V17H21V15H23V13H21V11H23V9H21V7H23V5H21C21 3.89543 20.1046 3 19 3V1H17V3H15V1H13V3H11V1H9V3ZM5 5H19V19H5V5ZM13 6H12V7V11V12H13H17H18V11V7V6H17H13ZM14 8H16V10H14V8Z",
    fill: "#000"
  }));
};

exports.Cpu = Cpu;