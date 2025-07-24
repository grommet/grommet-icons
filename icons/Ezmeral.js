"use strict";

exports.__esModule = true;
exports.Ezmeral = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Ezmeral = exports.Ezmeral = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Ezmeral"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 8H41V16H7V8Z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 8H7V16H1V8Z",
    fill: "#00775B"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M41 8H47V16H41V8Z",
    fill: "#00775B"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 16H41V22H7V16Z",
    fill: "#00775B"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 2H41V8H7V2Z",
    fill: "#00C781"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 8L7 2V8H1Z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 16L7 22V16H1Z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M47 8L41 2V8H47Z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M47 16L41 22V16H47Z",
    fill: "#01A982"
  }));
});
Ezmeral.displayName = 'Ezmeral';