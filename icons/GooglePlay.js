"use strict";

exports.__esModule = true;
exports.GooglePlay = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var GooglePlay = exports.GooglePlay = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlay"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#EA4335",
    d: "M11.128 12.003 1.09 22.011a2.73 2.73 0 0 0 3.999 1.62l11.29-6.377-5.251-5.25Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FBBC04",
    d: "m21.338 9.67-4.899-2.806-5.311 5.14 5.251 5.25 4.944-2.865a2.663 2.663 0 0 0 0-4.719h.015Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#4285F4",
    d: "M1.09 1.995c-.06.225-.091.457-.09.69V21.32c0 .233.03.465.09.69l10.038-10.007L1.09 1.995Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#34A853",
    d: "m11.128 12.003 5.311-5.139L5.126.383A2.79 2.79 0 0 0 3.723 0 2.73 2.73 0 0 0 1.09 1.988l10.038 10.015Z"
  }));
});
GooglePlay.displayName = 'GooglePlay';