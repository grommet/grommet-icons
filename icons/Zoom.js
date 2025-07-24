"use strict";

exports.__esModule = true;
exports.Zoom = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Zoom = exports.Zoom = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Zoom"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z",
    fill: "#3984FD"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 9C5 8.44772 5.44772 8 6 8H12C13.6569 8 15 9.34315 15 11V15C15 15.5523 14.5523 16 14 16H8C6.34315 16 5 14.6569 5 13V9Z",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5 11.7515C15.5 11.2671 15.6758 10.7991 15.9948 10.4345L17.6856 8.50226C18.1416 7.98108 19 8.30361 19 8.99613V15.004C19 15.6965 18.1416 16.019 17.6856 15.4978L15.9948 13.5656C15.6758 13.201 15.5 12.733 15.5 12.2486V11.7515Z",
    fill: "white"
  }));
});
Zoom.displayName = 'Zoom';