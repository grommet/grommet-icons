"use strict";

exports.__esModule = true;
exports.Home = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Home = exports.Home = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Home"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8906 0.616494C11.6092 0.136875 12.5641 0.171206 13.249 0.719033L21.874 7.61845C22.5857 8.18775 23 9.04988 23 9.96122V21.0003C22.9998 22.1047 22.1045 23.0003 21 23.0003H16.667C15.5625 23.0003 14.6672 22.1047 14.667 21.0003V14.3255H9.33301V21.0003C9.33282 22.1047 8.43746 23.0003 7.33301 23.0003H3C1.89555 23.0003 1.00019 22.1047 1 21.0003V9.96122C1.00001 9.04989 1.41434 8.18775 2.12598 7.61845L10.751 0.719033L10.8906 0.616494ZM3.375 9.17997C3.13781 9.36973 3.00001 9.65746 3 9.96122V21.0003H7.33301V14.3255C7.33305 13.2211 8.22861 12.3257 9.33301 12.3255H14.667C15.7714 12.3257 16.6669 13.2211 16.667 14.3255V21.0003H21V9.96122C21 9.65746 20.8622 9.36973 20.625 9.17997L12 2.28056L3.375 9.17997Z",
    fill: "#000"
  }));
});
Home.displayName = 'Home';