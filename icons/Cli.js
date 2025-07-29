"use strict";

exports.__esModule = true;
exports.Cli = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Cli = exports.Cli = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Cli"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 17C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17H18Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.29297 7.29297C6.65908 6.92685 7.23808 6.90426 7.63086 7.22461L7.70703 7.29297L10.707 10.293L10.7734 10.3662C10.9193 10.5442 11 10.7679 11 11C11 11.2321 10.9193 11.4558 10.7734 11.6338L10.707 11.707L7.70703 14.707C7.3165 15.0975 6.68349 15.0975 6.29297 14.707C5.90246 14.3165 5.90245 13.6835 6.29297 13.293L8.58594 11L6.29297 8.70703L6.22461 8.63086C5.90426 8.23809 5.92687 7.65909 6.29297 7.29297Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13 4C13.5523 4 14 4.44772 14 5V5.00977C14 5.56205 13.5523 6.00977 13 6.00977C12.4477 6.00977 12 5.56205 12 5.00977V5C12 4.44772 12.4477 4 13 4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 4C16.5523 4 17 4.44772 17 5V5.00977C17 5.56205 16.5523 6.00977 16 6.00977C15.4477 6.00977 15 5.56205 15 5.00977V5C15 4.44772 15.4477 4 16 4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 4C19.5523 4 20 4.44772 20 5V5.00977C20 5.56205 19.5523 6.00977 19 6.00977C18.4477 6.00977 18 5.56205 18 5.00977V5C18 4.44772 18.4477 4 19 4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }));
});
Cli.displayName = 'Cli';