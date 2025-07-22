"use strict";

exports.__esModule = true;
exports.LikeFill = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LikeFill = exports.LikeFill = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Like"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    fillRule: "evenodd",
    d: "M11 0h-.997L10 .997 11 1l-1-.003v.261l-.002.698-.006 2.207a2728.4 2728.4 0 0 0-.008 4.163c0 .42-.155.83-.454 1.132C9.243 9.749 8.763 10 8 10H1.001L1 11v-1H0v14h1v-1 1h19c1.154 0 2.203-.29 2.957-1.043C23.711 22.203 24 21.154 24 20v-9.999L23 10h1V9h-7V4c0-1.154-.29-2.203-1.043-2.957C15.203.289 14.154 0 13 0h-2ZM5 12v10H2V12h3Z",
    clipRule: "evenodd"
  }));
});
LikeFill.displayName = 'LikeFill';