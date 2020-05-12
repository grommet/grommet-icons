"use strict";

exports.__esModule = true;
exports.UserPolice = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UserPolice = function UserPolice(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserPolice"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16,14 C18.3736719,15.1826446 20,17.6506255 20,21 L20,23 L4,23 L4,21 C4,17.6457258 5.6310898,15.1754259 8,14 M12,15 C15.2602409,15 17.9031883,12.3141492 17.9031883,9.00098429 C17.9031883,8.29933805 18.1210147,7.62582606 17.9031883,7 M6.09318017,7 C5.88352479,7.61511425 6.09318017,8.31344562 6.09318017,9.00098429 C6.09318017,12.3141492 8.73775349,15 12,15 L12,15 M6,8 L18,8 L21,4 C19.0884181,2.26537447 15.7904958,1 12,1 C8.16364606,1 4.83185613,2.29617718 3,4 L6,8 L6,8 L6,8 Z M12,5 C12.5522847,5 13,4.55228475 13,4 C13,4 11,4 11,4 C11,4.55228475 11.4477153,5 12,5 L12,5 L12,5 Z"
  }));
};

exports.UserPolice = UserPolice;