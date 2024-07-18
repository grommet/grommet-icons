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
    viewBox: "0 0 48 24",
    a11yTitle: "Ezmeral"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 8h34v8H7V8z",
    fill: "#01A982"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 8h6v8H1V8zm40 0h6v8h-6V8zM7 16h34v6H7v-6z",
    fill: "#00775B"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 2h34v6H7V2z",
    fill: "#00C781"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m1 8 6-6v6H1zm0 8 6 6v-6H1zm46-8-6-6v6h6zm0 8-6 6v-6h6z",
    fill: "#01A982"
  }));
});
Ezmeral.displayName = 'Ezmeral';