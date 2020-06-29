"use strict";

exports.__esModule = true;
exports.Gem = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Gem = function Gem(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gem"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 1H6.58579L6.29289 1.29289L3.29289 4.29289L3 4.58579V5V19V19.4142L3.29289 19.7071L6.29289 22.7071L6.58579 23H7H17H17.4142L17.7071 22.7071L20.7071 19.7071L21 19.4142V19V5V4.58579L20.7071 4.29289L17.7071 1.29289L17.4142 1H17H7ZM5 6V18H6V6H5ZM8 21H16V20H8V21ZM19 18V6H18V18H19ZM16 3H8V4H16V3ZM16 6V18H8V6H16Z",
    fill: "#000"
  }));
};

exports.Gem = Gem;