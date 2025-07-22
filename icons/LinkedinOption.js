"use strict";

exports.__esModule = true;
exports.LinkedinOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LinkedinOption = exports.LinkedinOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "LinkedinOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#0077B5",
    fillRule: "evenodd",
    d: "M22.037 22h-4.152v-6.496c0-1.55-.026-3.542-2.157-3.542-2.16 0-2.49 1.688-2.49 3.43V22H9.09V8.64h3.98v1.827h.058c.553-1.05 1.908-2.158 3.928-2.158 4.204 0 4.98 2.766 4.98 6.364V22zM4.409 6.816A2.407 2.407 0 0 1 2 4.407a2.408 2.408 0 1 1 2.41 2.408zM6.486 22H2.33V8.64h4.156V22z"
  }));
});
LinkedinOption.displayName = 'LinkedinOption';