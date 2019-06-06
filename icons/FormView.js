"use strict";

exports.__esModule = true;
exports.FormView = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormView = function FormView(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormView"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z"
  }));
};

exports.FormView = FormView;