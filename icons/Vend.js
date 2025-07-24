"use strict";

exports.__esModule = true;
exports.Vend = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Vend = exports.Vend = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Vend"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 19.71C20 20.2622 19.5523 20.71 19 20.71C18.4477 20.71 18 20.2622 18 19.71V18.71H20V19.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 10.71C19.5521 10.7102 20 11.1578 20 11.71V12.71H18V11.71C18 11.1577 18.4477 10.71 19 10.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 4.70996C19.5523 4.70996 20 5.15768 20 5.70996V8.70996H18V5.70996C18 5.15768 18.4477 4.70996 19 4.70996Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1.70996C21.6569 1.70996 23 3.05311 23 4.70996V20.71C23 22.3668 21.6569 23.71 20 23.71H4C2.34315 23.71 1 22.3668 1 20.71V4.70996C1 3.05311 2.34315 1.70996 4 1.70996H20ZM3 20.71C3 21.2622 3.44772 21.71 4 21.71H15V17.71H11V18.71H8C7.48224 18.71 7.0561 18.3168 7.00488 17.8125L7 17.71H3V20.71ZM17 21.71H20C20.5523 21.71 21 21.2622 21 20.71V4.70996C21 4.15768 20.5523 3.70996 20 3.70996H17V21.71ZM3 15.71H6V13.71C6 13.1577 6.44772 12.71 7 12.71C7.55228 12.71 8 13.1577 8 13.71V15.71H11V13.71C11 13.1577 11.4477 12.71 12 12.71C12.5523 12.71 13 13.1577 13 13.71V15.71H15V10.71H3V15.71ZM4 3.70996C3.44772 3.70996 3 4.15768 3 4.70996V8.70996H6V6.70996C6 6.15768 6.44772 5.70996 7 5.70996C7.55228 5.70996 8 6.15768 8 6.70996V8.70996H11V6.70996C11 6.15768 11.4477 5.70996 12 5.70996C12.5523 5.70996 13 6.15768 13 6.70996V8.70996H15V3.70996H4Z",
    fill: "#000"
  }));
});
Vend.displayName = 'Vend';