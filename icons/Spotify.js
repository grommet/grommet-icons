"use strict";

exports.__esModule = true;
exports.Spotify = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Spotify = exports.Spotify = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Spotify"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#1ED760",
    fillRule: "evenodd",
    d: "M19.098 10.638C15.23 8.341 8.85 8.13 5.158 9.251a1.122 1.122 0 1 1-.652-2.148C8.745 5.816 15.79 6.064 20.244 8.708a1.122 1.122 0 1 1-1.146 1.93m-.126 3.403a.936.936 0 0 1-1.287.308c-3.225-1.983-8.142-2.557-11.958-1.399a.937.937 0 0 1-1.167-.623.937.937 0 0 1 .624-1.167c4.358-1.322 9.776-.682 13.48 1.594.44.271.578.847.308 1.287m-1.469 3.267a.748.748 0 0 1-1.028.25c-2.818-1.723-6.365-2.112-10.542-1.158a.748.748 0 1 1-.333-1.458c4.571-1.045 8.492-.595 11.655 1.338a.748.748 0 0 1 .248 1.028M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0"
  }));
});
Spotify.displayName = 'Spotify';