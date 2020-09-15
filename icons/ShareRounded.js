"use strict";

exports.__esModule = true;
exports.ShareRounded = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ShareRounded = function ShareRounded(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ShareRounded"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.9241 3.61722C20.8757 3.50014 20.804 3.3904 20.7092 3.29502C20.7078 3.2936 20.7064 3.29219 20.705 3.29078C20.5242 3.11106 20.2751 3 20 3H19.9998H14C13.4477 3 13 3.44772 13 4C13 4.55228 13.4477 5 14 5H17.5858L10.2929 12.2929C9.90237 12.6834 9.90237 13.3166 10.2929 13.7071C10.6834 14.0976 11.3166 14.0976 11.7071 13.7071L19 6.41421V10C19 10.5523 19.4477 11 20 11C20.5523 11 21 10.5523 21 10V4.00069C21 3.99946 21 3.99823 21 3.997C20.9996 3.86774 20.9743 3.73854 20.9241 3.61722ZM3 8C3 5.23858 5.23858 3 8 3H9C9.55228 3 10 3.44772 10 4C10 4.55228 9.55228 5 9 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8Z",
    fill: "#000"
  }));
};

exports.ShareRounded = ShareRounded;