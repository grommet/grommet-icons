"use strict";

exports.__esModule = true;
exports.Lounge = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Lounge = function Lounge(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Lounge"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5,5.99703014 C5,5.4463856 5.44994876,5 6.00684547,5 L17.9931545,5 C18.5492199,5 19,5.45303631 19,5.99703014 L19,13 L5,13 L5,5.99703014 Z M22,8 L22,15.0029699 C22,15.5536144 21.5446944,16 21.0081969,16 L2.99180311,16 C2.44404538,16 2,15.5469637 2,15.0029699 L2,8 M5,16 L5,18 L5,16 Z M19,16 L19,18 L19,16 Z"
  }));
};

exports.Lounge = Lounge;