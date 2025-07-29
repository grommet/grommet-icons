"use strict";

exports.__esModule = true;
exports.Vimeo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Vimeo = exports.Vimeo = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Vimeo"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.9883 6.80211C23.8811 9.13839 22.2498 12.3364 19.0938 16.397C15.8305 20.6368 13.0697 22.7571 10.8122 22.7571C9.41263 22.7571 8.22836 21.4663 7.2616 18.884C6.61584 16.5162 5.97083 14.1485 5.32432 11.7807C4.60581 9.19914 3.8363 7.90687 3.01204 7.90687C2.83204 7.90687 2.20428 8.28488 1.12802 9.03714L0 7.58287C1.18427 6.5426 2.35203 5.50234 3.5018 4.45983C5.08132 3.09556 6.26859 2.3778 7.05835 2.30505C8.92587 2.12579 10.0756 3.40231 10.5069 6.1346C10.9734 9.08289 11.2967 10.9167 11.4774 11.6344C12.0167 14.081 12.6092 15.3027 13.2557 15.3027C13.7574 15.3027 14.5127 14.5092 15.5185 12.9214C16.5235 11.3352 17.062 10.1284 17.134 9.29814C17.278 7.92937 16.7395 7.24311 15.5185 7.24311C14.944 7.24311 14.3515 7.37512 13.7424 7.63612C14.9222 3.77357 17.1752 1.89779 20.5015 2.00429C22.9676 2.07704 24.1308 3.67606 23.9883 6.80211Z",
    fill: "#1AB7EA"
  }));
});
Vimeo.displayName = 'Vimeo';