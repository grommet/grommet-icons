"use strict";

exports.__esModule = true;
exports.Sans = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Sans = function Sans(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sans"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 2h20v8H2V3zm0 10v8h20v-8H2zm3-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 17a2 2 0 1 1 4 0 2 2 0 0 1-4 0z",
    fill: "#000"
  }));
};

exports.Sans = Sans;