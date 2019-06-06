"use strict";

exports.__esModule = true;
exports.Help = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Help = function Help(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Help"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,23 C12.5522847,23 13,22.5522847 13,22 C13,21.4477153 12.5522847,21 12,21 C11.4477153,21 11,21.4477153 11,22 C11,22.5522847 11.4477153,23 12,23 Z M12,18 L12,15 C12,13 13,13 15,12 C17,11 18,9.15767339 18,7 C18,3.6862915 15.3137085,1 12,1 C8.6862915,1 6,3.6862915 6,7"
  }));
};

exports.Help = Help;