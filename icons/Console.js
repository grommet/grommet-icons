"use strict";

exports.__esModule = true;
exports.Console = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Console = exports.Console = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Console"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M16 18a1 1 0 1 0 0-2v2zm-8-2a1 1 0 1 0 0 2v-2zm.707-8.707a1 1 0 1 0-1.414 1.414l1.414-1.414zM11 11l.707.707a1 1 0 0 0 0-1.414L11 11zm-3.707 2.293a1 1 0 1 0 1.414 1.414l-1.414-1.414zM7 4h10V2H7v2zm13 3v10h2V7h-2zm-3 13H7v2h10v-2zM4 17V7H2v10h2zm3 3a3 3 0 0 1-3-3H2a5 5 0 0 0 5 5v-2zm13-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2zM17 4a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2zM7 2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3V2zm9 14H8v2h8v-2zM7.293 8.707l3 3 1.414-1.414-3-3-1.414 1.414zm3 1.586-3 3 1.414 1.414 3-3-1.414-1.414z"
  }));
});
Console.displayName = 'Console';