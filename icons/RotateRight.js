"use strict";

exports.__esModule = true;
exports.RotateRight = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RotateRight = function RotateRight(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "RotateRight"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.48,3.43A9.09,9.09,0,0,1,18.3,5.55V2.35h1.64v6.5h-6.5V7.21H17.7a7.46,7.46,0,1,0,1.47,8.65l1.46.73A9.11,9.11,0,1,1,12.48,3.43Z"
  }));
};

exports.RotateRight = RotateRight;