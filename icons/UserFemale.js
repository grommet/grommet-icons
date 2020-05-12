"use strict";

exports.__esModule = true;
exports.UserFemale = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UserFemale = function UserFemale(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserFemale"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20,24 L20,19 C19.9999999,15 15.9403581,14 15,14 C18.9475,14 20,12 20,12 C20,12 16.942739,10.031 17,6 C16.942739,3 14.8497684,1 12,1 C9.01190309,1 6.91893246,3 7,6 C6.91893246,9.969 4,12 4,12 C4,12 4.91417116,14 9,14 C7.92131306,14 4,15 4,19 L4,24 M16,19 L16,24 M8,19 L8,24"
  }));
};

exports.UserFemale = UserFemale;