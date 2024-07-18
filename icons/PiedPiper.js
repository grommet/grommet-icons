"use strict";

exports.__esModule = true;
exports.PiedPiper = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var PiedPiper = exports.PiedPiper = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "PiedPiper"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#609B4D",
    fillRule: "evenodd",
    d: "M0 19.421c2.274 0 4.042-.758 4.042-.758s3.032-7.579 7.326-7.579c3.285 0 3.79 2.527 3.79 2.527S19.958 4.263 24 3c-3.79 3.032-3.284 6.316-5.053 7.832-1.768 1.515-1.768.006-3.79 3.543-4.546.505-6.032 2.014-9.094 3.783 5.305-2.526 6.316-2.78 11.116-2.526.504.026.758.252.505.757-.733 1.466-1.28 3.673-2.273 3.537-5.558-.758-8.843.506-11.622.506-2.778 0-3.789-.506-3.789-1.01z"
  }));
});
PiedPiper.displayName = 'PiedPiper';