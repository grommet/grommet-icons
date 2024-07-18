"use strict";

exports.__esModule = true;
exports.Blank = void 0;
var _react = _interopRequireDefault(require("react"));
var _StyledIcon = require("../StyledIcon");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Blank = exports.Blank = function Blank(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    "aria-hidden": true
  }, props));
};