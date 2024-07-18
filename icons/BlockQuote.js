"use strict";

exports.__esModule = true;
exports.BlockQuote = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var BlockQuote = exports.BlockQuote = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "BlockQuote"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M.78 8.89c0-3.07 1.53-4.3 4.3-4.34L5.38 6C3.78 6.17 3 7 3.1 8.31h1.44V12H.78zm5.9 0c0-3.07 1.53-4.3 4.3-4.34l.3 1.45C9.68 6.17 8.89 7 9 8.31h1.44V12H6.68zm10.26 6.22c0 3.07-1.53 4.3-4.3 4.34L12.35 18c1.6-.16 2.39-1 2.28-2.3h-1.45V12h3.76zm5.9 0c0 3.07-1.53 4.3-4.3 4.34l-.3-1.45c1.6-.16 2.39-1 2.28-2.3h-1.44V12h3.76z"
  }));
});
BlockQuote.displayName = 'BlockQuote';