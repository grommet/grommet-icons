"use strict";

exports.__esModule = true;
exports.WifiOff = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var WifiOff = exports.WifiOff = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "WifiOff"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.293 1.56973C21.6836 1.17924 22.3166 1.17922 22.7071 1.56973C23.0975 1.96026 23.0976 2.59331 22.7071 2.9838L2.70711 22.9838C2.31662 23.3743 1.68358 23.3742 1.29305 22.9838C0.902522 22.5933 0.902522 21.9603 1.29305 21.5697L7.84187 15.0199C7.64117 14.9879 7.44781 14.8962 7.29305 14.7416C6.90252 14.3511 6.90252 13.7171 7.29305 13.3266C8.40041 12.2193 9.78934 11.5597 11.2296 11.35C11.3254 11.3361 11.4205 11.3373 11.5118 11.35L13.4649 9.39688C10.6999 8.94317 7.76624 9.78211 5.63582 11.9125C5.24534 12.303 4.61229 12.3029 4.22176 11.9125C3.83145 11.522 3.83131 10.8889 4.22176 10.4984C7.17609 7.54413 11.3917 6.6241 15.1309 7.73087L16.7071 6.1547C12.0503 4.34934 6.56439 5.32771 2.80769 9.08438C2.41724 9.47484 1.78417 9.4747 1.39363 9.08438C1.00311 8.69386 1.00311 8.06084 1.39363 7.67032C5.94817 3.1158 12.7 2.1053 18.2315 4.63028L21.293 1.56973Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.1348 16.0434C12.4115 15.5656 13.0231 15.4026 13.5011 15.6791C14.3949 16.1964 15.0001 17.1653 15.0001 18.2768C15 19.9335 13.6568 21.2767 12.0001 21.2768C10.8886 21.2768 9.9197 20.6716 9.40242 19.7777C9.12594 19.2998 9.28888 18.6882 9.76668 18.4115C10.2446 18.1351 10.8563 18.298 11.1329 18.7758C11.3073 19.0772 11.6313 19.2768 12.0001 19.2768C12.5523 19.2767 13 18.829 13.0001 18.2768C13.0001 17.9079 12.8005 17.584 12.4991 17.4096C12.0213 17.1329 11.8584 16.5213 12.1348 16.0434Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.377 12.5785C14.6534 12.1004 15.2651 11.9369 15.7432 12.2133C16.2621 12.5132 16.7503 12.8845 17.1925 13.3266C17.5829 13.7171 17.5829 14.3511 17.1925 14.7416C16.802 15.1318 16.1689 15.1317 15.7784 14.7416C15.4606 14.4238 15.1116 14.1582 14.7423 13.9447C14.2641 13.6683 14.1007 13.0567 14.377 12.5785Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17.2579 9.70938C17.5927 9.27016 18.22 9.18513 18.6593 9.51993C19.0489 9.81693 19.4231 10.1431 19.7784 10.4984C20.1687 10.8889 20.1686 11.522 19.7784 11.9125C19.3879 12.303 18.7549 12.3029 18.3643 11.9125C18.0724 11.6206 17.7651 11.3537 17.4464 11.1107C17.0072 10.776 16.9232 10.1486 17.2579 9.70938Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.9112 6.68009C20.2547 6.24763 20.884 6.17547 21.3165 6.51895C21.7632 6.87375 22.194 7.25779 22.6065 7.67032C22.9969 8.06085 22.997 8.6939 22.6065 9.08438C22.216 9.47478 21.583 9.47476 21.1925 9.08438C20.8339 8.7258 20.4596 8.39291 20.0723 8.08536C19.6399 7.74189 19.5678 7.11256 19.9112 6.68009Z",
    fill: "#000"
  }));
});
WifiOff.displayName = 'WifiOff';