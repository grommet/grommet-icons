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
    d: "M12.625 11.4956L12 12.2769C12.5846 11.5461 12.6224 11.4985 12.625 11.4956L12.626 11.4966C12.6267 11.4971 12.628 11.4988 12.6289 11.4995C12.6306 11.5008 12.6325 11.5025 12.6348 11.5044C12.6397 11.5084 12.6466 11.5137 12.6543 11.52C12.6696 11.5326 12.6898 11.5503 12.7148 11.5718C12.7653 11.615 12.8352 11.6761 12.917 11.7524C13.0792 11.9039 13.2978 12.1213 13.5186 12.3862C13.9211 12.8692 14.5 13.7052 14.5 14.6772C14.4998 16.0513 13.4404 17.2769 12 17.2769C10.5596 17.2769 9.5002 16.0513 9.5 14.6772C9.5 13.7052 10.0789 12.8692 10.4814 12.3862C10.7022 12.1213 10.9208 11.9039 11.083 11.7524C11.1648 11.6761 11.2347 11.615 11.2852 11.5718C11.3102 11.5503 11.3304 11.5326 11.3457 11.52C11.3534 11.5137 11.3603 11.5084 11.3652 11.5044C11.3675 11.5025 11.3694 11.5008 11.3711 11.4995C11.372 11.4988 11.3733 11.4981 11.374 11.4976L11.375 11.4966C11.3775 11.4993 11.4124 11.5428 11.9355 12.1968L11.375 11.4966L12 10.9966L12.625 11.4956Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5996 7.47705L12 8.27686C12.6 7.47686 12.5994 7.47689 12.5996 7.47705L12.6006 7.47803L12.6025 7.479C12.6033 7.4796 12.6044 7.48015 12.6055 7.48096C12.6083 7.48311 12.6126 7.48624 12.6172 7.48975C12.6268 7.49709 12.6404 7.50798 12.6572 7.521C12.6909 7.54707 12.7384 7.58456 12.7979 7.63232C12.9167 7.72784 13.0841 7.86537 13.2832 8.03955C13.6802 8.38696 14.2121 8.88593 14.7471 9.48779C15.7701 10.6387 17 12.3818 17 14.2769C17 17.0383 14.7614 19.2769 12 19.2769C9.23858 19.2769 7 17.0383 7 14.2769C7 12.3818 8.22987 10.6387 9.25293 9.48779C9.78792 8.88593 10.3198 8.38696 10.7168 8.03955C10.9159 7.86537 11.0833 7.72784 11.2021 7.63232C11.2616 7.58456 11.3091 7.54707 11.3428 7.521C11.3596 7.50798 11.3732 7.49709 11.3828 7.48975C11.3874 7.48624 11.3917 7.48311 11.3945 7.48096C11.3956 7.48015 11.3967 7.4796 11.3975 7.479L11.3994 7.47803C11.3996 7.47788 11.4001 7.47677 11.8223 8.03955L11.4004 7.47705L12 7.02686L12.5996 7.47705ZM12 9.57471C11.6512 9.88173 11.1975 10.3092 10.7471 10.8159C9.77013 11.915 9 13.1719 9 14.2769C9 15.9337 10.3431 17.2769 12 17.2769C13.6569 17.2769 15 15.9337 15 14.2769C15 13.1719 14.2299 11.915 13.2529 10.8159C12.8025 10.3092 12.3488 9.88173 12 9.57471Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13 4.27686C13.5523 4.27686 14 4.72457 14 5.27686V5.28662C14 5.83891 13.5523 6.28662 13 6.28662C12.4477 6.28662 12 5.83891 12 5.28662V5.27686C12 4.72457 12.4477 4.27686 13 4.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 4.27686C16.5523 4.27686 17 4.72457 17 5.27686V5.28662C17 5.83891 16.5523 6.28662 16 6.28662C15.4477 6.28662 15 5.83891 15 5.28662V5.27686C15 4.72457 15.4477 4.27686 16 4.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 4.27686C19.5523 4.27686 20 4.72457 20 5.27686V5.28662C20 5.83891 19.5523 6.28662 19 6.28662C18.4477 6.28662 18 5.83891 18 5.28662V5.27686C18 4.72457 18.4477 4.27686 19 4.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1.27686C21.6569 1.27686 23 2.62 23 4.27686V20.2769C23 21.9337 21.6569 23.2769 20 23.2769H4C2.34315 23.2769 1 21.9337 1 20.2769V4.27686C1 2.62 2.34315 1.27686 4 1.27686H20ZM4 3.27686C3.44772 3.27686 3 3.72457 3 4.27686V20.2769C3 20.8291 3.44772 21.2769 4 21.2769H20C20.5523 21.2769 21 20.8291 21 20.2769V4.27686C21 3.72457 20.5523 3.27686 20 3.27686H4Z",
    fill: "#000"
  }));
});
Firewall.displayName = 'Firewall';