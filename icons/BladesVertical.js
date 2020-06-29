"use strict";

exports.__esModule = true;
exports.BladesVertical = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BladesVertical = function BladesVertical(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BladesVertical"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V6C22 7.10457 21.1046 8 20 8H4C2.89543 8 2 7.10457 2 6V4ZM4 4L4 6H16V4H4ZM18 4V6H20V4H18ZM2 11C2 9.89543 2.89543 9 4 9H20C21.1046 9 22 9.89543 22 11V13C22 14.1046 21.1046 15 20 15H4C2.89543 15 2 14.1046 2 13V11ZM4 11L4 13H16V11H4ZM20 13H18V11H20V13ZM4 16C2.89543 16 2 16.8954 2 18V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V18C22 16.8954 21.1046 16 20 16H4ZM4 20L4 18H16V20H4ZM18 20H20V18H18V20Z",
    fill: "#000"
  }));
};

exports.BladesVertical = BladesVertical;