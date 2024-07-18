"use strict";

exports.__esModule = true;
exports.Webcam = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Webcam = exports.Webcam = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Webcam"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 22H4",
    stroke: "#000",
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5 18v3m-7.5.5V18",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M12 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    stroke: "#000",
    strokeWidth: "2",
    fill: "none"
  }));
});
Webcam.displayName = 'Webcam';