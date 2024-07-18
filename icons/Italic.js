"use strict";

exports.__esModule = true;
exports.Italic = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Italic = exports.Italic = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Italic"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m13 19.56-.13.43H6.3l.16-.43a4.05 4.05 0 0 0 1.3-.17 1.6 1.6 0 0 0 .76-.55 7.22 7.22 0 0 0 .8-2l2.77-9.61a7.07 7.07 0 0 0 .35-1.81.86.86 0 0 0-.15-.52.94.94 0 0 0-.46-.32 4.28 4.28 0 0 0-1.22-.11l.14-.43h6.16l-.13.43a2.6 2.6 0 0 0-1.12.17 1.78 1.78 0 0 0-.81.67 9.08 9.08 0 0 0-.71 1.93l-2.74 9.63a8.76 8.76 0 0 0-.4 1.69.83.83 0 0 0 .15.5.92.92 0 0 0 .47.32 6.35 6.35 0 0 0 1.38.18z"
  }));
});
Italic.displayName = 'Italic';