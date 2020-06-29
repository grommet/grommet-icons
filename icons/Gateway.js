"use strict";

exports.__esModule = true;
exports.Gateway = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Gateway = function Gateway(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gateway"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM13.0312 6.96875H13V4H11V6.96875H10.9688H8.96875L10.1687 8.56875L11.2 9.94375L12 11.0104L12.8 9.94375L13.8313 8.56875L15.0312 6.96875H13.0312ZM12 12.9974L11.2 14.0641L10.1687 15.4391L8.96875 17.0391H10.9688H11V20H13V17.0391H13.0312H15.0312L13.8313 15.4391L12.8 14.0641L12 12.9974ZM4.025 12.8L2.95833 12L4.025 11.2L5.4 10.1687L7 8.96875V10.9688V11H10V13H7V13.0312V15.0312L5.4 13.8313L4.025 12.8ZM21.0417 12L19.975 11.2L18.6 10.1687L17 8.96875V10.9688V11H14V13H17V13.0312V15.0312L18.6 13.8313L19.975 12.8L21.0417 12Z",
    fill: "#000"
  }));
};

exports.Gateway = Gateway;