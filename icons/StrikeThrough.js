"use strict";

exports.__esModule = true;
exports.StrikeThrough = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StrikeThrough = exports.StrikeThrough = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StrikeThrough"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.77 12.17h12.46v1.09H5.77zm10.93 1.48h-3.81c.59.34 1 .6 1.18.74a3.39 3.39 0 0 1 1 1.07 2.38 2.38 0 0 1 .31 1.14 2.3 2.3 0 0 1-.82 1.76 3.18 3.18 0 0 1-2.22.74 4.7 4.7 0 0 1-2.23-.54 3.77 3.77 0 0 1-1.55-1.36 7.41 7.41 0 0 1-.79-2.46h-.41V20h.41a1.35 1.35 0 0 1 .24-.7.59.59 0 0 1 .44-.17 6.5 6.5 0 0 1 1.39.35 12.63 12.63 0 0 0 1.45.41 7.26 7.26 0 0 0 1.25.1A4.87 4.87 0 0 0 16 18.72a4 4 0 0 0 1.34-3 3.8 3.8 0 0 0-.42-1.72c-.06-.13-.14-.23-.22-.35zm-7.81-2.44c.21.17.49.36.81.57h4.87c-.48-.29-1.07-.62-1.76-1a12.49 12.49 0 0 1-3.33-2.24A1.93 1.93 0 0 1 9 7.26a2.18 2.18 0 0 1 .77-1.63 2.72 2.72 0 0 1 1.93-.71 4.14 4.14 0 0 1 2 .53 3.78 3.78 0 0 1 1.49 1.43 6.6 6.6 0 0 1 .73 2.42h.41V4h-.41a1.39 1.39 0 0 1-.3.7.67.67 0 0 1-.48.17 2.64 2.64 0 0 1-.89-.28A6.45 6.45 0 0 0 11.68 4a4.49 4.49 0 0 0-3.21 1.21A3.75 3.75 0 0 0 7.21 8a3.57 3.57 0 0 0 .43 1.73 4.72 4.72 0 0 0 1.25 1.48z"
  }));
});
StrikeThrough.displayName = 'StrikeThrough';