"use strict";

exports.__esModule = true;
exports.Superscript = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Superscript = exports.Superscript = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Superscript"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m18.74 3.63.19 4.07h-.49a4.9 4.9 0 0 0-.38-1.54A2.57 2.57 0 0 0 17 5.07a3.68 3.68 0 0 0-1.73-.35h-2.44V18a3.56 3.56 0 0 0 .34 2 1.92 1.92 0 0 0 1.5.54h.6V21H7.92v-.5h.61a1.76 1.76 0 0 0 1.56-.67 3.88 3.88 0 0 0 .29-1.83V4.72H8.29a5.82 5.82 0 0 0-1.73.18 2.37 2.37 0 0 0-1.14.93 3.78 3.78 0 0 0-.56 1.87h-.48l.21-4.07zM22.48 1h.33v5.62a1.13 1.13 0 0 0 .06.4.41.41 0 0 0 .17.21.63.63 0 0 0 .28.08h.4v.29h-2.96v-.27h.45a.62.62 0 0 0 .29-.1.38.38 0 0 0 .15-.23 1.4 1.4 0 0 0 0-.37V2.77a4.45 4.45 0 0 0 0-.64c0-.15-.1-.23-.24-.23a.82.82 0 0 0-.28 0l-.3.13-.18-.25z"
  }));
});
Superscript.displayName = 'Superscript';