"use strict";

exports.__esModule = true;
exports.Local = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Local = exports.Local = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Local"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 3.70996C21.6569 3.70996 23 5.05311 23 6.70996V18.71C23 20.3668 21.6569 21.71 20 21.71H4C2.34315 21.71 1 20.3668 1 18.71V6.70996C1 5.05311 2.34315 3.70996 4 3.70996H20ZM3 18.71C3 19.2622 3.44772 19.71 4 19.71H20C20.5523 19.71 21 19.2622 21 18.71V17.71H3V18.71ZM3 15.71H21V13.71H3V15.71ZM4 5.70996C3.44772 5.70996 3 6.15768 3 6.70996V11.71H11V5.70996H4ZM13 11.71H21V9.70996H13V11.71ZM13 7.70996H21V6.70996C21 6.15768 20.5523 5.70996 20 5.70996H13V7.70996Z",
    fill: "#000"
  }));
});
Local.displayName = 'Local';