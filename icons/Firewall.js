"use strict";

exports.__esModule = true;
exports.Firewall = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Firewall = exports.Firewall = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Firewall"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.625 11.2188L12 12C12.5846 11.2693 12.6224 11.2216 12.625 11.2188L12.626 11.2197C12.6267 11.2203 12.628 11.222 12.6289 11.2227C12.6306 11.224 12.6325 11.2257 12.6348 11.2275C12.6397 11.2315 12.6466 11.2368 12.6543 11.2432C12.6696 11.2558 12.6898 11.2734 12.7148 11.2949C12.7653 11.3382 12.8352 11.3993 12.917 11.4756C13.0792 11.627 13.2978 11.8444 13.5186 12.1094C13.9211 12.5924 14.5 13.4284 14.5 14.4004C14.4998 15.7744 13.4404 17 12 17C10.5596 17 9.5002 15.7744 9.5 14.4004C9.5 13.4284 10.0789 12.5924 10.4814 12.1094C10.7022 11.8444 10.9208 11.627 11.083 11.4756C11.1648 11.3993 11.2347 11.3382 11.2852 11.2949C11.3102 11.2734 11.3304 11.2558 11.3457 11.2432C11.3534 11.2368 11.3603 11.2315 11.3652 11.2275C11.3675 11.2257 11.3694 11.224 11.3711 11.2227C11.372 11.222 11.3733 11.2213 11.374 11.2207L11.375 11.2197C11.3775 11.2225 11.4124 11.266 11.9355 11.9199L11.375 11.2197L12 10.7197L12.625 11.2188Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5996 7.2002L12 8C12.6 7.2 12.5994 7.20003 12.5996 7.2002L12.6006 7.20117L12.6025 7.20215C12.6033 7.20275 12.6044 7.20329 12.6055 7.2041C12.6083 7.20625 12.6126 7.20938 12.6172 7.21289C12.6268 7.22024 12.6404 7.23113 12.6572 7.24414C12.6909 7.27022 12.7384 7.3077 12.7979 7.35547C12.9167 7.45098 13.0841 7.58851 13.2832 7.7627C13.6802 8.1101 14.2121 8.60908 14.7471 9.21094C15.7701 10.3619 17 12.105 17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 12.105 8.22987 10.3619 9.25293 9.21094C9.78792 8.60908 10.3198 8.1101 10.7168 7.7627C10.9159 7.58851 11.0833 7.45098 11.2021 7.35547C11.2616 7.3077 11.3091 7.27022 11.3428 7.24414C11.3596 7.23113 11.3732 7.22024 11.3828 7.21289C11.3874 7.20938 11.3917 7.20625 11.3945 7.2041C11.3956 7.20329 11.3967 7.20275 11.3975 7.20215L11.3994 7.20117C11.3996 7.20103 11.4001 7.19991 11.8223 7.7627L11.4004 7.2002L12 6.75L12.5996 7.2002ZM12 9.29785C11.6512 9.60488 11.1975 10.0324 10.7471 10.5391C9.77013 11.6381 9 12.895 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14C15 12.895 14.2299 11.6381 13.2529 10.5391C12.8025 10.0324 12.3488 9.60488 12 9.29785Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13 4C13.5523 4 14 4.44772 14 5V5.00977C14 5.56205 13.5523 6.00977 13 6.00977C12.4477 6.00977 12 5.56205 12 5.00977V5C12 4.44772 12.4477 4 13 4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 4C16.5523 4 17 4.44772 17 5V5.00977C17 5.56205 16.5523 6.00977 16 6.00977C15.4477 6.00977 15 5.56205 15 5.00977V5C15 4.44772 15.4477 4 16 4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 4C19.5523 4 20 4.44772 20 5V5.00977C20 5.56205 19.5523 6.00977 19 6.00977C18.4477 6.00977 18 5.56205 18 5.00977V5C18 4.44772 18.4477 4 19 4Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }));
});
Firewall.displayName = 'Firewall';