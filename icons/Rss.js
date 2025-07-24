"use strict";

exports.__esModule = true;
exports.Rss = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Rss = exports.Rss = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Rss"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 17.2769C5.65685 17.2769 7 18.62 7 20.2769C7 21.9337 5.65685 23.2769 4 23.2769C2.34315 23.2769 1 21.9337 1 20.2769C1 18.62 2.34315 17.2769 4 17.2769ZM4 19.2769C3.44772 19.2769 3 19.7246 3 20.2769C3 20.8291 3.44772 21.2769 4 21.2769C4.55228 21.2769 5 20.8291 5 20.2769C5 19.7246 4.55228 19.2769 4 19.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 11.2769C8.52285 11.2769 13 15.754 13 21.2769C13 21.8291 12.5523 22.2769 12 22.2769C11.4477 22.2769 11 21.8291 11 21.2769C11 16.8586 7.41828 13.2769 3 13.2769C2.44772 13.2769 2 12.8291 2 12.2769C2 11.7246 2.44772 11.2769 3 11.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 6.27686C11.2843 6.27686 18 12.9926 18 21.2769C18 21.8291 17.5523 22.2769 17 22.2769C16.4477 22.2769 16 21.8291 16 21.2769C16 14.0972 10.1797 8.27686 3 8.27686C2.44772 8.27686 2 7.82914 2 7.27686C2 6.72457 2.44772 6.27686 3 6.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 1.27686C14.0457 1.27686 23 10.2312 23 21.2769C23 21.8291 22.5523 22.2769 22 22.2769C21.4477 22.2769 21 21.8291 21 21.2769C21 11.3357 12.9411 3.27686 3 3.27686C2.44772 3.27686 2 2.82914 2 2.27686C2 1.72457 2.44772 1.27686 3 1.27686Z",
    fill: "#000"
  }));
});
Rss.displayName = 'Rss';