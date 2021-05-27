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
    d: "M20 24v-5c0-4-4.06-5-5-5 3.948 0 5-2 5-2s-3.057-1.969-3-6c-.057-3-2.15-5-5-5-2.988 0-5.081 2-5 5-.081 3.969-3 6-3 6s.914 2 5 2c-1.079 0-5 1-5 5v5m12-5v5m-8-5v5"
  }));
};

exports.UserFemale = UserFemale;