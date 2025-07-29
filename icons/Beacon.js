"use strict";

exports.__esModule = true;
exports.Beacon = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Beacon = exports.Beacon = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Beacon"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0002 7.07165C13.657 7.07176 15.0002 8.41486 15.0002 10.0716C15 11.3772 14.1646 12.4847 13.0002 12.8968V22.0004C13.0001 22.5525 12.5523 23.0002 12.0002 23.0004C11.448 23.0004 11.0003 22.5525 11.0002 22.0004V12.8968C9.83579 12.4847 9.00042 11.3772 9.0002 10.0716C9.0002 8.41479 10.3433 7.07165 12.0002 7.07165ZM12.0002 9.07165C11.4479 9.07165 11.0002 9.51936 11.0002 10.0716C11.0005 10.6237 11.4481 11.0716 12.0002 11.0716C12.5522 11.0715 12.9999 10.6236 13.0002 10.0716C13.0002 9.51943 12.5524 9.07176 12.0002 9.07165Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.22188 2.29333C4.61237 1.90284 5.24541 1.90291 5.63594 2.29333C6.02623 2.68387 6.02639 3.31694 5.63594 3.70739C2.2312 7.11228 2.12459 12.567 5.31661 16.1L5.63594 16.4349L5.70528 16.5111C6.02536 16.9039 6.00196 17.4839 5.63594 17.85C5.26992 18.2156 4.69069 18.2383 4.29805 17.9183L4.22188 17.85L3.83223 17.4388C-0.0691202 13.1208 0.0605001 6.45485 4.22188 2.29333Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.3645 2.29333C18.7306 1.92727 19.3096 1.90454 19.7024 2.22497L19.7785 2.29333L20.1682 2.70348C24.0696 7.02156 23.94 13.6884 19.7785 17.85L19.7024 17.9183C19.3098 18.2384 18.7306 18.2155 18.3645 17.85C17.9739 17.4595 17.974 16.8255 18.3645 16.4349L18.6838 16.1C21.7727 12.6811 21.7724 7.46233 18.6838 4.04333L18.3645 3.70739L18.2951 3.63122C17.9751 3.23846 17.9985 2.65933 18.3645 2.29333Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.12618 5.05309C7.51896 4.73258 8.09887 4.75527 8.46505 5.12145C8.85511 5.51189 8.85511 6.14508 8.46505 6.53551L8.28731 6.72204C6.57103 8.62146 6.57115 11.5208 8.28731 13.4203L8.46505 13.6068L8.53341 13.683C8.85334 14.0756 8.83074 14.6549 8.46505 15.0209C8.09903 15.3869 7.51894 15.4103 7.12618 15.0902L7.05001 15.0209L6.80196 14.7601C4.3193 12.0123 4.40193 7.7697 7.05001 5.12145L7.12618 5.05309Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5354 5.12145C15.9015 4.75527 16.4814 4.73257 16.8742 5.05309L16.9504 5.12145L17.1984 5.38317C19.6805 8.13093 19.5981 12.3728 16.9504 15.0209L16.8742 15.0902C16.4815 15.4104 15.9015 15.3867 15.5354 15.0209C15.1452 14.6304 15.1451 13.9972 15.5354 13.6068L15.7131 13.4203C17.4292 11.5209 17.4292 8.62147 15.7131 6.72204L15.5354 6.53551L15.467 6.46032C15.1465 6.06759 15.1693 5.48764 15.5354 5.12145Z",
    fill: "#000"
  }));
});
Beacon.displayName = 'Beacon';